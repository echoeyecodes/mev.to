import React from "react";
import { Link } from "react-router-dom";
import { Mutation } from "react-apollo";
import gql from "graphql-tag";
import Modal from "./Modal";
import image from '../logo.svg'
class SignUp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: {
        email: "",
        password: "",
        fullName: "",
        username: "",
        confirmPassword: "",
        gender: ""
      },
      profileImage: "",
      isCompleted: false,
      form: false
    };
  }

  verifyData = (evt) =>{
    const{data} = this.state
    if(data[evt] !== '' && data[evt] !== '' && data[evt] !== '' && data[evt] !== '' && data[evt] !== ''){
      this.setState({
        form: true
      })
    }else{
      this.setState({
        form: false
      })
    }
  }

  getData = evt => {
    const { data } = this.state;
    data[evt.target.name] = evt.target.value;
    this.setState({ data });

    this.verifyData(evt.target.name)
  };

  clearFields = () => {
    this.setState({
      data: {
        email: "",
        password: "",
        fullName: "",
        username: "",
        gender: "",
        confirmPassword: ""
      },
      profileImage: ""
    });
  };

  _confirm = async data => {
    const { token, user} = data.signUp;
    this._saveUserData(token, user);
    this.clearFields();

    this.setState({
      isCompleted: true
    });
  };

  setImage = async data => {
    const { filename } = data.singleUpload;
    let url = `https://storage.googleapis.com/echoeyecodes/${filename}`;
    this.setState({
      profileImage: url
    });
  };

  _saveUserData = (token, user) => {
    localStorage.setItem("auth-token", token);
    localStorage.setItem('auth-token-user', user.id)
  };

  render() {
    const {
      login,
      email,
      password,
      fullName,
      username,
      gender
    } = this.state.data;
    const { profileImage } = this.state;
    const style = {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      margin: "50px auto",
      height: "100%",
      width: "50%"
    };
    const inputStyle={
      border: "1px #22303f solid",
      borderRadius: "3px",
      color: "black",
      height: "20px",
      padding: "5px"
    }
    return (
      <div style={style}>
        <Mutation
          mutation={SIGNUP_MUTATION}
          variables={{
            login,
            email,
            password,
            profileImage,
            fullName,
            username,
            gender
          }}
          onError={error => {
            alert(error);
          }}
          onCompleted={data => this._confirm(data)}
        >
          {mutation => (
            <form style={style}>
              <img
                style={{ borderRadius: "50%", margin: "10px auto" }}
                src={this.state.profileImage === '' ? image : this.state.profileImage}
                alt="profilepicture"
                width="80"
                height="80"
              />
              <Mutation
                mutation={UPLOAD_FILE}
                onCompleted={data => this.setImage(data)}
              >
                {uploadFile => (
                  <input
                    type="file"
                    required
                    onChange={({
                      target: {
                        validity,
                        files: [file]
                      }
                    }) => validity.valid && uploadFile({ variables: { file } })}
                  />
                )}
              </Mutation>
              <br />

              <p>Fullname</p>
              <input
                onInput={this.getData}
                style={inputStyle}
                type="text"
                value={this.state.data.fullName}
                placeholder="Fullname"
                name="fullName"
              />

              <p>Username</p>
              <input
                onInput={this.getData}
                style={inputStyle}
                type="text"
                placeholder="Username"
                value={this.state.data.username}
                name="username"
              />

              <p>Gender</p>
              <input
                onInput={this.getData}
                style={inputStyle}
                type="text"
                placeholder="Gender"
                value={this.state.data.gender}
                name="gender"
              />

              <p>Email</p>
              <input
                onInput={this.getData}
                style={inputStyle}
                type="email"
                placeholder="Email"
                value={this.state.data.email}
                name="email"
              />

              <p>Password</p>
              <input
                onInput={this.getData}
                style={inputStyle}
                type="password"
                placeholder="Password"
                value={this.state.data.password}
                name="password"
              />

              <p>Confirm Password</p>
              <input
                style={inputStyle}
                type="password"
                placeholder="Confirm Password"
                name="password1"
              />
              {this.state.form ? (
                <div
                  onClick={mutation}
                  style={{
                    width: "118px",
                    color: "white",
                    borderRadius: "3px",
                    textAlign: "center",
                    fontWeight: "bold",
                    cursor: "pointer",
                    border: "2px solid white",
                    padding: "5px",
                    margin: "50px auto",
                    backgroundColor: "#00af81"
                  }}
                >
                  Sign Up
                </div>
              ) : (
                <div>
                  <div
                    style={{
                      width: "118px",
                      color: "white",
                      borderRadius: "3px",
                      opacity: '0.4',
                      textAlign: "center",
                      fontWeight: "bold",
                      cursor: "pointer",
                      border: "2px solid white",
                      padding: "5px",
                      margin: "50px auto",
                      backgroundColor: "#00af81"
                    }}
                  >
                    Sign Up
                  </div>
                </div>
              )}

              <p style={{ margin: "10px auto" }}>
                Already have an account?{" "}
                <span>
                  <Link to="/login">Login</Link>
                </span>
              </p>
            </form>
          )}
        </Mutation>

        {this.state.isCompleted ? (
          <Modal>
            <h4 style={{ color: "#000000", textAlign: "center" }}>
              Account created successfully
            </h4>
            <Link to="/login">
              <button
                style={{
                  color: "white",
                  borderRadius: "3px",
                  fontWeight: "bold",
                  padding: "5px",
                  cursor: "pointer",
                  border: "2px solid white",
                  backgroundColor: "#00af81"
                }}
              >
                Go to login page
              </button>
            </Link>
          </Modal>
        ) : null}
      </div>
    );
  }
}
const SIGNUP_MUTATION = gql`
  mutation signUp(
    $email: String!
    $password: String!
    $fullName: String!
    $gender: String!
    $profileImage: String!
    $username: String!
  ) {
    signUp(
      email: $email
      password: $password
      fullName: $fullName
      gender: $gender
      profileImage: $profileImage
      username: $username
    ) {
      token
      user{
        id
      }
    }
  }
`;

const UPLOAD_FILE = gql`
  mutation singleUpload($file: Upload!) {
    singleUpload(file: $file) {
      filename
    }
  }
`;
export default SignUp;
