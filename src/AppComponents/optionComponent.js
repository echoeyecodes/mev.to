import React from "react"

class OptionComponent extends React.Component {
  constructor(props) {
    super(props)

    this.handleInputChange = this.handleInputChange.bind(this)
  }
  handleInputChange() {
    let index = this.props.pos
    this.props.textChange(
      this.props.pos,
      document.getElementsByClassName("optionBox").item(index).value
    )
  }
  render() {
    return (
      <input
      className='optionBox'
        style={{
          width: "200px",
          height: "30px",
          margin: "10px",
          borderRadius: "5px",
          border: "1px #663399 solid",
          padding: "5px",
        }}
        onInput={this.handleInputChange}
        placeholder={`Option ${this.props.pos + 1}`}
        type="text"
      />
    )
  }
}

export default OptionComponent
