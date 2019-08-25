import React from "react";
import gql from 'graphql-tag'
import {Query} from 'react-apollo'
class UserComponent extends React.Component {
  render(props) {
    return (
            <div
              style={{
                margin: "80px 40px 10px 40px",
                border: "2px solid #b10224",
                boxShadow: "5px 6px 0px #b10224",
                padding: "20px",
                borderRadius: "3px",
                backgroundColor: "#141f2d"
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center"
                }}
              >
                <img
                  style={{
                    borderRadius: "50%"
                  }}
                  src={this.props.data.profileImage}
                  alt="text"
                  width="150"
                  height="150"
                />

                <div style={{ width: "40%", margin: "0px 20px" }}>
                  <h1>{this.props.data.fullName}</h1>
                  <Query query={USER_QUERY}>
                    {({loading, error, data}) =>{
                      if(loading) return  <button
                      style={{
                        borderRadius: "5px",
                        padding: "5px",
                        backgroundColor: "#C90229",
                        border: "none",
                        width: "113px",
                        fontWeight: "bold"
                      }}
                    >
                      Fetching data
                    </button>

                    if(error) return  <button
                    style={{
                      borderRadius: "5px",
                      padding: "5px",
                      backgroundColor: "#C90229",
                      border: "none",
                      width: "113px",
                      fontWeight: "bold"
                    }}
                  >
                    Request couldn't be completed
                  </button>

                  const info = data.currentUser
                  if(info.id === this.props.data.id){
                    return(
                      <button
                      style={{
                        borderRadius: "5px",
                        padding: "5px",
                        backgroundColor: "#C90229",
                        border: "none",
                        width: "113px",
                        fontWeight: "bold"
                      }}
                    >
                      Edit profile
                    </button>
                    )
                  }else{
                    return(
                      <button
                      style={{
                        borderRadius: "5px",
                        padding: "5px",
                        backgroundColor: "#C90229",
                        border: "none",
                        width: "113px",
                        fontWeight: "bold"
                      }}
                    >
                      + Follow
                    </button>
                    )
                  }
                    }}
                  </Query>
                  <p>
                    <i>
                      Computer Science and Engineering PhD student interested in
                      Data Visualization, Gaming, Education, and Music.{" "}
                    </i>
                  </p>
                </div>

                <div style={{ borderLeft: "4px solid white", padding: "20px" }}>
                  <p>work</p>
                  <p style={{ fontWeight: "bold" }}>
                    PhD Student at The Ohio State University
                  </p>
                  <p>education</p>
                  <p style={{ fontWeight: "bold" }}>
                    Case Western Reserve University
                  </p>
                  <p>joined</p>
                  <p style={{ fontWeight: "bold" }}>Jun 30, 2019</p>
                </div>
              </div>
            </div>
    );
  }
}
const USER_QUERY = gql`
{
  currentUser{
    id
    username
    fullName
  }
}
`
export default UserComponent;
