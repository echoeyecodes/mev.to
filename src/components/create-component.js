import React from "react";
import TagField from "./tag-field";
import { Mutation } from "react-apollo";
import gql from "graphql-tag";
import Markdown from "react-markdown";
class CreateComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tags: [],
      data: {
        title: "",
        image: "",
        content: "",
        contentImage: ""
      }
    };
  }

  setImage = async data => {
    const { filename } = data.singleUpload;
    let url = `https://storage.googleapis.com/echoeyecodes/${filename}`;
    this.setState({
      data: {
        image: url
      }
    });
  };

  setContentImages = async data => {
    const { filename } = data.singleUpload;
    let url = `https://storage.googleapis.com/echoeyecodes/${filename}`;
    this.setState({
      data: {
        contentImage: url
      }
    });
  };

  getData = evt => {
    const { data } = this.state;
    data[evt.target.name] = evt.target.value;
    this.setState(data);
  };
  createTagField = evt => {
    evt.preventDefault();
    const { tags } = this.state;
    const obj = "";
    tags.push(obj);
    this.setState({ tags });
  };

  changeTagData = (value, index) => {
    const { tags } = this.state;
    tags[index] = value;
    this.setState(tags);
  };

  finalize = data => {
    alert('Successful');
  };

  showError = (error) =>{
    alert(error)
  }
  render() {
    const { title, image, content } = this.state.data;
    const { tags } = this.state;
    const style = {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      margin: "50px auto",
      height: "100%",
      width: "80%"
    };
    return (
      <div style={style}>
        <Mutation
          mutation={CREATE_POST_MUTATION}
          variables={{ title, image, tags, content }}
          onCompleted={data => this.finalize(data)}
        >
          {mutation => (
            <form style={style}>
              <Mutation
                mutation={UPLOAD_FILE}
                onCompleted={data => this.setImage(data)}
                onError={error => this.showError(error)}
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
              <p>Title</p>
              <input
                onInput={this.getData}
                style={{
                  border: "1px #22303f solid",
                  borderRadius: "3px",
                  color: "black",
                  height: "20px",
                  padding: "5px"
                }}
                type="text"
                placeholder="Title"
                name="title"
              />

              <p>Content</p>
              <textarea
                onInput={this.getData}
                style={{
                  border: "1px #22303f solid",
                  borderRadius: "3px",
                  color: "black",
                  height: "20px",
                  minHeight: "100px",
                  padding: "5px"
                }}
                type="text"
                placeholder="Content (in Markdown)"
                name="content"
              />

              <Mutation
                mutation={UPLOAD_FILE}
                onCompleted={data => this.setContentImages(data)}
              >
                {uploadFile => (
                  <div>
                    <input
                      type="file"
                      required
                      onChange={({
                        target: {
                          validity,
                          files: [file]
                        }
                      }) =>
                        validity.valid && uploadFile({ variables: { file } })
                      }
                    />

                    <input
                      style={{
                        border: "1px #22303f solid",
                        borderRadius: "3px",
                        color: "black",
                        height: "20px",
                        padding: "5px"
                      }}
                      type="text"
                      value={this.state.data.contentImage}
                      placeholder="urls"
                    />
                  </div>
                )}
              </Mutation>

              <main id="source">
                <Markdown
                  className="markdown"
                  source={this.state.data.content}
                />
              </main>

              <style jsx global>{`
                .markdown p {
                  font-size: 21px;
                  line-height: 32px;
                }
                .markdown img{
                  text-align: center;
                  width: 200px;
                  height: 150px;
                }
              `}</style>

              <div style={{ marginTop: "20px" }}>
                Tags:
                {this.state.tags.map((item, index) => (
                  <TagField onClick={this.changeTagData} index={index} />
                ))}
              </div>

              <button
                onClick={this.createTagField}
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
                Add Tag
              </button>

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
                POST
              </div>
            </form>
          )}
        </Mutation>
      </div>
    );
  }
}
const CREATE_POST_MUTATION = gql`
  mutation createPost(
    $image: String!
    $title: String!
    $tags: [String]
    $content: String!
  ) {
    createPost(image: $image, title: $title, tags: $tags, content: $content) {
      title
      images
      content
      tags
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

export default CreateComponent;
