import React from 'react'

class TagField extends React.Component{

    handleInput =(props) =>{
        this.props.onClick(document.getElementsByClassName('tag-fields').item(this.props.index).value, this.props.index)
    }

    render(){
        return(
            <input className='tag-fields' onInput={this.handleInput} style={{
                border: "1px #22303f solid",
                borderRadius: "3px",
                color: "black",
                height: "20px",
                width: '60px',
                padding: "5px"
            }} type='text' placeholder='tag'/>
            
        )
    }
} 
export default TagField