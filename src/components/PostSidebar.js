import React from "react";
import gql from "graphql-tag";
import { Query } from "react-apollo";
import {Link} from 'react-router-dom'
const style = {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  backgroundColor: "#141f2d",
  margin: "10px 0px",
  padding: "5px",
  borderRadius: "3px"
};

const PostSideBar = props => (
  <main style={{ height: "auto", marginLeft: "10px" }}>
    <div
      style={{
        borderRadius: "5px",
        border: "1px #22303f solid",
        backgroundColor: "#141f2d",
        padding: "5px"
      }}
    >
    <Link style={{textDecorationLine: 'none'}} to={`/${props.data.postedBy.username}`}>
    <div style={style}>
        <img
          style={{ borderRadius: "50%", margin: "0px 10px" }}
          width="70px"
          height="70px"
          src={`${props.data.postedBy.profileImage}`}
          alt="dp"
        />
        <div id="hero" style={{ margin: "0px 10px" }}>
          <h3>{props.data.postedBy.fullName}</h3>
          <p>Data Engineer | Consultant | Data Scientist</p>
          <p>@{props.data.postedBy.username}</p>
        </div>
      </div>
    </Link>
      

      <Query query={USER_QUERY}>
        {({ loading, data, error }) =>{
          if(loading) return <button
          style={{
            backgroundColor: "#66e2d5",
            border: "none",
            borderRadius: "3px",
            padding: "5px",
            height: "40px",
            width: "100%",
            color: "#000000",
            fontWeight: "bold"
          }}
        >
          Fetching data
        </button>
        if(error) return <p>An error occured</p>

        if(props.data.postedBy.id === data.currentUser.id){
          return(
            <button
            style={{
              backgroundColor: "#66e2d5",
              border: "none",
              borderRadius: "3px",
              padding: "5px",
              height: "40px",
              width: "100%",
              color: "#000000",
              fontWeight: "bold"
            }}
          >
          EDIT PROFILE
          </button>
          )
        }else{
          return(
            <button
            style={{
              backgroundColor: "#66e2d5",
              border: "none",
              borderRadius: "3px",
              padding: "5px",
              height: "40px",
              width: "100%",
              color: "#000000",
              fontWeight: "bold"
            }}
          >
          + FOLLOW
          </button>
          )
        }
        }
         
        }
      </Query>

      <p>joined</p>
      <h3> Aug 21, 2019</h3>
    </div>

    <h2 style={{margin: '2px'}}>More from {props.data.postedBy.fullName}</h2>

    <div
      style={{
        borderRadius: "5px",
        padding: "5px"
      }}
    >
      {props.data.postedBy.posts.map(item => (
        <Link style={{textDecorationLine: 'none'}} to={`/${props.data.postedBy.username}/${item.id}`}>
         <div style={style}>
          <div id="hero" style={{ margin: "0px 10px" }}>
            <h3>{item.title}</h3>
            <p>
              <span>#career</span> <span>#techtalk</span> <span>#discuss</span>
            </p>
          </div>
        </div>
        </Link>
      ))}
    </div>
  </main>
);
const USER_QUERY = gql`
  {
    currentUser {
      id
      profileImage
      username
      readingList {
        id
      }
    }
  }
`;
export default PostSideBar;
