import React from "react"
import Firebase from "firebase"
import OptionComponent from "./optionComponent"
import PollSuccessfulDialog from './pollSuccessfulDialog'
class PollComponent extends React.Component {
  constructor(props) {
    super(props)

    this.sendData = this.sendData.bind(this)
    this.addOption = this.addOption.bind(this)
    this.inputChange = this.inputChange.bind(this)
    this.assignTitle = this.assignTitle.bind(this)

    this.state = {
      data: [],
      options: [],
      isValidated: false,
      title: "",
      isSuccessful: false,
      path: ''
    }
  }
  sendData() {
    if(this.state.options.length === 0 || !this.state.title ){
      alert('You must complete all fields')
      return
    }
    if(this.state.options.length < 2){
      this.setState({
        isValidated: false
      })
      alert('You must have at least two options')
      return
    }
    if (typeof window !== 'undefined') {
      // all of your firebase code in here
      
      var x = Firebase.database()
      .ref()
      .child("polls")
      .push()
    x.child("pollTitle")
      .child("title")
      .set(this.state.title)
    let innerOptions = x.child("options")
    let { options } = this.state

    options.forEach(item => {
      innerOptions.push().set(item)
    })

    let link = `${x.toString().substring(46)}`
    this.setState({
      path: link,
      isSuccessful: true,
    })

    this.setState({
      options: [],
      title: ''
    })
  }
    

  }

  assignTitle(evt) {
    this.setState({
      title: evt.target.value,
    })
  }
  addOption() {
    let { options } = this.state
    let obj = {
      value: "",
    }
    options.push(obj)
    this.setState({
      options: options,
      isValidated: false
    })
  }
  inputChange(id, value) {
    const { options } = this.state
    options[id].value = value
    this.setState({ options })

    this.state.options.forEach((item, index) =>{
      if(index+1 === this.state.options.length && item.value){
        this.setState({
          isValidated: true
        })
      }
      if(!item.value){
        this.setState({
          isValidated: false
        })
      }
    })
  }

  render() {
    return (
      <div style={{ display: "flex", flexDirection: "column" }}>
        <PollSuccessfulDialog show={this.state.isSuccessful} info={this.state.path}/>
       <input
          style={{
            width: "200px",
            height: "30px",
            margin: "10px",
            outline: 'none',
            borderRadius: "5px",
            border: "1px #663399 solid",
            padding: "5px",
          }}
          onInput={this.assignTitle}
          type="text"
          ref="title"
          value={this.state.title}
          placeholder="Subject"
        />
        {this.state.options.map((item, id) => {
          return (
            <OptionComponent
              textChange={this.inputChange}
              data={item}
              pos={id}
            />
          )
        })}
        <button
          style={{
            width: "200px",
            height: "30px",
            margin: "10px",
            background: "white",
            outline: 'none',
            cursor: 'pointer',
            padding: "5px",
            border: "none",
            color: "#663399",
            fontWeight: 'bold',
            borderRadius: "5px",
          }}
          onClick={this.addOption}
        >
          Add Option
        </button>

        {this.state.isValidated ? 
         <button
         id='sendBtn'
           style={{
             width: "200px",
             height: "30px",
             margin: "10px",
             background: "#663399",
              outline: 'none',
              padding: "5px",
             cursor: 'pointer',
             border: "none",
             color: "white",
             borderRadius: "5px",
           }}
           onClick={this.sendData}
         >
           Done
         </button>
         : 
         <button
           style={{
             width: "200px",
             height: "30px",
             margin: "10px",
             background: "#663399",
             opacity: 0.4,
             padding: "5px",
              outline: 'none',
             cursor: 'pointer',
             border: "none",
             color: "white",
             borderRadius: "5px",
           }}
         >
           Done
         </button>
      }
     
      </div>
    )
  }
}

export default PollComponent
