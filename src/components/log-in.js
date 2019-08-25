import React from "react";
import Link from 'next/link'
class Login extends React.Component {
  render() {
    const style = {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      margin: "50px auto",
      height: "100%",
      width: "50%"
    };
    return (
      <div style={style}>
        <form style={style}>

          <p>Username</p>
          <input
            style={{
              border: "1px #22303f solid",
              borderRadius: "3px",
              color: "black",
              height: "20px",
              padding: "5px"
            }}
            type="text"
            placeholder="Username"
            name="username"
          />

          <p>Password</p>
          <input
            style={{
              border: "1px #22303f solid",
              borderRadius: "3px",
              color: "black",
              height: "20px",
              padding: "5px"
            }}
            type="text"
            placeholder="Password"
            name="password"
          />

          <button
            style={{
                width: '118px',
                color: 'white',
                borderRadius: '3px',
                fontWeight: 'bold',
                cursor: 'pointer',
                border: '2px solid white',
                padding: '5px',
                margin: '50px auto',
                backgroundColor: '#00af81'
            }}
          >
            Log in
          </button>

          <p style={{margin: '10px auto'}}>Don't have an account? <span><Link href='/signup'>Sign up</Link></span></p>
        </form>
      </div>
    );
  }
}

export default Login;
