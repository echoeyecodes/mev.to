import React from "react"
import PollMain from "./pollMain"
import Firebase from "firebase"
import config from "./config"
class Polls extends React.Component {
  constructor(props){
    super(props)
    if (typeof window !== 'undefined') {
      // all of your firebase code in here
      if (!Firebase.apps.length) {
        Firebase.initializeApp(config)
      }
  }

  }
  render() {
    return (
        <div
          style={{
            width: "100%",
            height: "100vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
        <h3 style={{
          width: '250px',
          textAlign: 'center'
        }}>Enter the header for your poll and input your options for it.</h3>
          <PollMain />

          <a style={{
            color: 'black',
            marginTop: '150px'
          }} href='https://github.com/echoeyecodes/pollinator'>Fork this repo on Github</a>
        </div>
    )
  }
}

export default Polls
