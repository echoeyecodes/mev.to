import React from 'react'
import Firebase from "firebase"
import VoteButton from './voteButtons'
import ResultComponent from './resultComponent'
class PollData extends React.Component{

    constructor(props){
        super(props)    
        this.vote = this.vote.bind(this)

      this.state ={
          options: [],
          pollTitle: '',
        totalVoteCount: 0,
        showResult: false,
        results: []
      }
    }
    vote(id){
        if (typeof window !== 'undefined') {
            // all of your firebase code in here
            let x = Firebase.database().ref().child('polls').child(this.props.query)
            x.child('users').on('value', snapshot =>{
                if(!snapshot.hasChild(Firebase.auth().currentUser.uid)){
                    x.child('users').child(Firebase.auth().currentUser.uid).child('name').set('null')
                    x.child('options').child(id).child('users').child(Firebase.auth().currentUser.uid).child('name').set('null')
                }
            })
        }
    }

    componentDidMount(){
        let y =[]
        let total=0
        if (typeof window !== 'undefined') {
            // all of your firebase code in here

            let firebaseData =  Firebase.database().ref().child('polls').child(this.props.query)

            firebaseData.child('options').on('child_added', snapshot =>{
                     let obj ={
                         option: snapshot.child('value').val(),
                         key: snapshot.key
                     }
                    y.push(obj)
                    this.setState({
                        options: y
                    }) 
           })
           firebaseData.child('pollTitle').on('value', snapshot =>{
               this.setState({
                   pollTitle: snapshot.child('title').val()
               })
           })
           firebaseData.child('users').on('value', snapshot =>{
               if(snapshot.hasChild(Firebase.auth().currentUser.uid)){
                   this.setState({
                       showResult: true
                   })
               }
               this.setState({
                   totalVoteCount: snapshot.numChildren()
               })
           })
   
           let z=[]
           firebaseData.child('options').on('value', snapshot =>{
               z=[]
               if(this.props.totalVoteCount ===0){
                   total = 1
               }else{
                   total = this.props.totalVoteCount
               }
               snapshot.forEach(item =>{
                   let dp =(item.child('users').numChildren() / total) * 100
                   let obj = {
                       option: item.child('value').val(),
                       value: dp.toFixed(2)
                   }
                  z.push(obj)
               })
               
               this.setState({
                   results: z
               })
   
              
           })
        }
       
    }

    render(){
        return(
            <div style={{ display: "flex", flexDirection: "column", justifyContent: 'center', alignItems: 'center' }}>
                <h4 style={{width: '300px', textAlign: 'center'}}>{this.state.pollTitle}</h4>

                { this.state.showResult ? this.state.results.map (item => <ResultComponent results ={item} />)
                 :
                this.state.options.map (item => <VoteButton onClick={this.vote} data ={item} /> ) 

                    }
               
                {this.state.totalVoteCount === 0 ?  null :  <p>{this.state.totalVoteCount} total vote(s)</p>}
            </div>
        )
    }
}

export default PollData