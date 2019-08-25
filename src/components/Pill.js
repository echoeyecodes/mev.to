import React from 'react'

const Pill = (props) => <div style={{ borderRadius: '3px',
backgroundColor: '#141f2d', padding: '5px',  border: '1px #22303f solid', margin: '20px auto'}}>
    <p style={{fontWeight: 'bold'}}>{props.title}</p>
    <p>{props.content}</p>
</div>

export default Pill