import React from "react";

const style = {
  width: '60%',
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  marginTop: "80px",
  marginLeft: '20px',
  borderRadius: "5px",
  border: "1px #22303f solid",
  backgroundColor: "#141f2d",
  padding: "5px"
};

const ProfileItem = (props) => (
  <div style={style}>
    <img
      style={{ borderRadius: "50%", margin: "0px 10px" }}
      width="70px"
      height="70px"
      src={props.data.postedBy.profileImage}
      alt="dp"
    />
    <div id="hero" style={{ margin: "0px 10px" }}>
      <h3>{props.data.postedBy.fullName}<span><button style={{
          backgroundColor: '#66e2d5',
          border: 'none',
          borderRadius: '3px',
          padding: '5px',
          color: '#000000',
          fontWeight: 'bold'
      }}>+ FOLLOW</button></span></h3>
      <p>Data Engineer | Consultant | Data Scientist</p>
      <p>@{props.data.postedBy.username}</p>
    </div>
  </div>
);

export default ProfileItem;
