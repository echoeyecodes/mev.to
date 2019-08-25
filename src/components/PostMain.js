import React from "react";
import { Link } from "react-router-dom";
import PostTagItems from "./post-tag-items";
import Markdown from "react-markdown";
import ProfileItem from "./ProfileItem";
import BottomNavBar from "./BottomNavBar";
import CommentField from './CommentField'
import CommentItem from './Commentitem'
class PostMain extends React.Component {
  render(props) {
    return (
      <div
        style={{
          position: 'relative',
          width: '100%',
          border: "1px #22303f solid",
          marginTop: "80px",
          marginBottom: '50px'
        }}
      >
        <div
          style={{
            width: "100%",
            height: "500px",
            backgroundPosition: "center",
            backgroundSize: "cover",
            textAlign: "left",
            borderTopRightRadius: "5px",
            borderTopLeftRadius: "5px",
            backgroundImage: `url(${this.props.data.images})`
          }}
        />

        <div style={{ marginLeft: "20px", marginRight: "20px" }}>
          <h1 style={{ fontSize: "calc(1.85vw + 25px)" }}>
            {this.props.data.title}
          </h1>

          <Link style={{ textDecorationLine: "none" }} to="/">
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center"
              }}
            >
              <img
                style={{ borderRadius: "50%" }}
                src={this.props.data.postedBy.profileImage}
                alt="text"
                width="40"
                height="40"
              />
              <p style={{ marginLeft: "10px" }}>
                echoeyecodes ・ <span>Aug 15</span>{" "}
                <span style={{ fontWeight: "normal" }}> ・ 9 mins read</span>
              </p>
            </div>
          </Link>

          <div style={{ marginTop: "20px" }}>
            {this.props.data.tags.map(item => (
              <PostTagItems tag={item} />
            ))}
          </div>

          <main id="source">
            <Markdown className="markdown" source={this.props.data.content} />
          </main>
        </div>

        <style jsx global>{`
          .markdown p {
            font-size: 21px;
            line-height: 32px;
          }
          .markdown img {
            text-align: center;
          }
        `}</style>

        <ProfileItem data={this.props.data}/>

        <br />
        
        <CommentField data={this.props.data}/>

        {this.props.data.comments.map(item =>  <CommentItem data={item}/>)}
        
        <BottomNavBar data={this.props.data}/>

      </div>
    );
  }
}

export default PostMain;
