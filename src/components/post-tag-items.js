import React from "react";
import {Link} from "react-router-dom";

const colors=['#2A2566', '#311999', '#6c00b9']
const PostTagItems = props => (
  <Link  style={{
    textDecorationLine: "none",
    fontSize: "18px",
    padding: '5px',
    borderRadius: '5px',
    margin: "5px",
    backgroundColor: colors[Math.floor(Math.random() * colors.length)]
  }} to={`/tags/${props.tag}`}>
      {`#${props.tag}`}
  </Link>
);

export default PostTagItems;
