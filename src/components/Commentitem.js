import React from "react";

const CommentItem = (props) => {
  const style = {
    width: "95%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginRight: '20px',
    marginTop: "30px",
    marginLeft: "20px",
    border: "1px #22303f solid",
    backgroundColor: "#141f2d",
    padding: "5px",
    marginBottom: '30px'
  };
  return (
    <div style={style}>
      <img
        style={{ borderRadius: "50%", margin: "0px 10px" }}
        width="70px"
        height="70px"
        src={props.data.commentBy.profileImage}
        alt="dp"
      />
      <div id="hero" style={{ margin: "0px 0px" }}>
        <h3>
          {props.data.commentBy.fullName}{" "}
        </h3>
        <p>{props.data.content}</p>
      </div>
    </div>
  );
};

export default CommentItem
