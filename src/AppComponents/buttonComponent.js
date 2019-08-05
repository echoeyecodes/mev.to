import React from 'react'

class ButtonComponent extends React.Component{
    constructor(props){
        super(props)

        this.handleChangeQuestion1 = this.handleChangeQuestion1.bind(this)
        this.handleChangeQuestion2 = this.handleChangeQuestion2.bind(this)
        this.handleChangeQuestion3 = this.handleChangeQuestion3.bind(this)
        this.handleChangeQuestion4 = this.handleChangeQuestion4.bind(this)
    }
    handleChangeQuestion1(){
           this.props.changeQuestion('btn1',document.getElementById('btn1').textContent)
    }
    handleChangeQuestion2(){
        this.props.changeQuestion('btn2',document.getElementById('btn2').textContent)
 }
 handleChangeQuestion3(){
    this.props.changeQuestion('btn3',document.getElementById('btn3').textContent)
}
handleChangeQuestion4(){
    this.props.changeQuestion('btn4',document.getElementById('btn4').textContent)
}

    render(){
        return(
            <div>
                <button id='btn1' disabled={this.props.disabled} onClick={this.handleChangeQuestion1}>{this.props.options.optionA}</button>
                <button id='btn2' disabled={this.props.disabled} onClick={this.handleChangeQuestion2}>{this.props.options.optionB}</button>
                <button id='btn3' disabled={this.props.disabled} onClick={this.handleChangeQuestion3}>{this.props.options.optionC}</button>
                <button id='btn4' disabled={this.props.disabled} onClick={this.handleChangeQuestion4}>{this.props.options.optionD}</button>
            </div>
        )
    }
}

export default ButtonComponent