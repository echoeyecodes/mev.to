import React from "react";
import gql from "graphql-tag";
import { Mutation } from "react-apollo";
import Modal from "./Modal";
import { Link } from "react-router-dom";
class CommentField extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      content: "",
      postID: "",
      showModal: false
    };
  }
  finalize = item => {
    this.setState({
      content: "",
      showModal: true
    });
  };

  content = evt => {
    let { content } = this.state;
    content = evt.target.value;
    this.setState({ content });
  };

  componentDidMount() {
    let { postID } = this.state;
    postID = this.props.data.id;
    this.setState({ postID });
  }
  render(props) {
    const { content, postID } = this.state;
    return (
      <Mutation
        mutation={ADD_COMMENT}
        variables={{ postID, content }}
        onCompleted={data => this.finalize(data)}
      >
        {mutation => (
          <div>
            <textarea
              onChange={this.content}
              style={{
                border: "1px #22303f solid",
                borderRadius: "3px",
                color: "black",
                height: "20px",
                minHeight: "100px",
                padding: "5px",
                margin: "10px",
                width: "96%"
              }}
              type="text"
              value={this.state.content}
              placeholder="Content (in Markdown)"
              name="content"
            />
            <button
              onClick={mutation}
              style={{
                width: "118px",
                color: "white",
                borderRadius: "3px",
                fontWeight: "bold",
                cursor: "pointer",
                border: "2px solid white",
                padding: "5px",
                margin: "10px",
                backgroundColor: "#00af81"
              }}
            >
              Post Comment
            </button>

            {this.state.showModal ? (
              <Modal>
                <p style={{ color: "black" }}>Post created successfully</p>
                <Link
                  style={{
                    color: "white",
                    textDecorationLine: "none",
                    borderRadius: "3px",
                    backgroundColor: "#00af81",
                    padding: "5px"
                  }}
                  to='/'
                >
                  Go to home
                </Link>
              </Modal>
            ) : (
              ""
            )}
          </div>
        )}
      </Mutation>
    );
  }
}
const ADD_COMMENT = gql`
  mutation commentPost($postID: ID!, $content: String!) {
    commentPost(postID: $postID, content: $content) {
      id
      commentBy {
        id
        username
      }
      post {
        id
      }
      content
    }
  }
`;

const FEED_QUERY = gql`
  {
    posts {
      id
      title
      content
      tags
      createdAt
      images
      likes {
        id
      }
      reading {
        id
      }
      postedBy {
        id
        profileImage
        username
        fullName
      }
    }
  }
`;
export default CommentField;
