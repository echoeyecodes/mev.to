import React from "react";

class BottomNavBar extends React.Component {

    constructor(props){
      super(props)

      this.state={
        likeCount: 0,
        readingListCount: 0
      }
    }

    componentDidMount(){
      this.setState({
        likeCount: this.props.data.likes.length,
        readingListCount: this.props.data.reading.length
      })
    }

    addLike =() =>{
      let x = this.state.likeCount
      x=x+1
      this.setState({
        likeCount: x
      })
    }
  render(){
    return(
      <div
      style={{
        display: "flex",
        flexDirection: "row",
        position: 'fixed',
        justifyContent:"center",
        alignItems: 'center',
        width: '63%',
        bottom: '0px',
        backgroundColor: 'rgb(20, 31, 45)',
      }}
    >
      <p style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', margin: '10px'}}>
        <img
        onClick={this.addLike}
        className='reactions'
          alt="heart"
          src="https://practicaldev-herokuapp-com.freetls.fastly.net/assets/emoji/emoji-one-heart-855b5a6263042e4c9448cf2cb0dd2e201598b77b1e3f1dc041492bc0128d9fb8.png"
       width='30' height='30' />{" "}
        <span style={{margin: '5px 10px', fontWeight: 'bold'}}>{this.state.likeCount}</span>
      </p>
  
  <p style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', margin: '10px'}}>
  <img  className='reactions' src="https://practicaldev-herokuapp-com.freetls.fastly.net/assets/emoji/emoji-one-bookmark-040f92162fa88c379d9d4e04bc5c192b1eb0b080d109dfaf3c9b1a60a1aeef0a.png" alt="sticker" width="30" height="30"></img>
  <span style={{margin: '5px 10px', fontWeight: 'bold'}}>{this.state.readingListCount}</span>
  </p>
  
  <style jsx>
      {`
      .reactions{
        cursor: pointer;
        padding: 5px;
        border-radius: 3px;
      }
      .reactions:hover{
        background-color:#202c3d;
      }
      .clicked{
        background-color:linear-gradient(111deg, #ffb4cb, #ff80a8);
      }
      `}
  </style>
    </div>
    )
   
  }

  
}

export default BottomNavBar
