import React from "react";
import PostMain from "./PostMain";
import PostSideBar from "./PostSidebar";
import { Query } from "react-apollo";
import gql from "graphql-tag";
class PostComponent extends React.Component {

  commentSubscribe =(subscribe) =>{
    subscribe({
      document: COMMENT_SUBSCRIPTION,
      updateQuery:(prev, {subscriptionData}) =>{
        if(!subscriptionData.data) return prev
        const newComment = subscriptionData.data.newComment
        const exists = prev.singlePost.comments.find(({id}) => id === newComment.id)

        if(exists) return prev

        return Object.assign({}, prev, {
          comments: [newComment, ...prev.singlePost.comments]

        })
      }
    })
  }

  render(props) {
    const id = this.props.data
    const style = {
      display: "grid",
      gridTemplateColumns: "70% 30%",
      margin: "0px 5%",
      gridGap: '10px',
    };
    return (
      <Query query={FEED_QUERY} variables={{id}} >
        {({ data, loading, error, subscribeToMore}) => {
          if (error) return <div>Error</div>;
          if (loading) return <div>Loading</div>;

          this.commentSubscribe(subscribeToMore)

          const item = data.singlePost;
          return (
            <main style={style}>
            <PostMain data={item}/>
            <div
              style={{
                marginTop: "80px",
                minWidth: "380px",
                maxWidth: "380px",
                height: 'auto'
              }}
            >
              <PostSideBar data={item}/>
            </div>
          </main>
          )
        }}
      </Query>
    );
  }
}


const COMMENT_SUBSCRIPTION = gql `
subscription{
  newComment{
    id
    commentBy{
      id
      username
      fullName
      profileImage
    }
    createdAt
    content
    post{
      id
      title
      content
    }
  }
}
`

const FEED_QUERY = gql`

   query singlePost($id: ID!){
    singlePost(id: $id){
      id
      title
      content
      tags
      images
      postedBy {
        id
        profileImage
        username
        fullName
        posts{
          id
          title
        }
      }
      reading{
        id
      }
      comments{
        id
        content
        commentBy{
          id
          username
          profileImage
          fullName
        }
      }
      likes{
        id
      }
    }
        }
`;
export default PostComponent;
