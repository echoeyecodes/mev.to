import React from 'react'

const VoteButton =(props) =>{

    function handleVote(){
        props.onClick(props.data.key)
    }
    return(
        <button
        style={{
          width: "200px",
          height: "40px",
          margin: "10px",
          backgroundColor: '#663399',
          color: 'white',
          borderRadius: "5px",
          cursor: 'pointer',
          border: "none",
          padding: "5px",
        }}
        onClick={handleVote}
      >
        {props.data.option}
      </button>
    )
}

export default VoteButton