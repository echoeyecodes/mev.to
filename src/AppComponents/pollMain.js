import React from 'react'
import PollComponent from './pollComponent'
import PollData from './pollData'
import Firebase from 'firebase'
import LoginComponent from './loginComponent'
class PollMain extends React.Component{
    constructor(props){
        super(props)

        this.state ={
            isMain: false,
            query: '',
            showLogin:false,
        }
    }

    queryPoll(query){
        this.setState({
            query: query
        })
    }

    componentDidMount(){
        if (typeof window !== 'undefined') {
            // all of your firebase code in here

            Firebase.auth().onAuthStateChanged( user =>{
                if(user){
                    this.setState({
                        showLogin: false
                    })
                }else{
                    this.setState({
                        showLogin: true
                    })
                }
            })
    
            if(window.location.search){
                let firebaseData =  Firebase.database().ref().child('polls').child(window.location.search.substring(1))
                firebaseData.child('users').on('value', snapshot =>{
                    this.setState({
                        totalVoteCount: snapshot.numChildren()
                    })
                })
                this.setState({
                    isMain: true
                })
                var s = window.location.search
                this.queryPoll(s.substring(1))
            }
        }
       
    }
    render(){
        return(
            <div>
            {this.state.showLogin ? <LoginComponent show ={this.state.showLogin} /> : null}
            {this.state.isMain ? <PollData totalVoteCount={this.state.totalVoteCount} query = {this.state.query} /> : <PollComponent url={this.props.url}/>}
            </div>
        )
    }
}

export default PollMain