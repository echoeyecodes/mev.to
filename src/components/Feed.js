import React from "react";
import FeedItemMain from "./FeedItemMain";
import FeedItem from "./FeedItem";
import { Query } from "react-apollo";
import gql from "graphql-tag";
class Feed extends React.Component {

  subscribetoNewPosts = async (subscription) =>{
    subscription({
      document: POST_SUBSCRIPTION,
      updateQuery:(prev, {subscriptionData}) =>{
        if(!subscriptionData.data) return prev
        const newPost = subscriptionData.data.newPost
        const exists = prev.posts.find(({id}) => id ===newPost.id)
        if(exists){
          console.log('exists')
          return prev
        }

        return Object.assign({}, prev, {
          posts: [newPost, ...prev.posts]
        })
      }
    })
  }


  render() {
    return (
      <div style={{marginTop: '80px',}}>
        <Query query={FEED_QUERY}>
          {({ data, loading, error, subscribeToMore }) => {
            if (loading) {
              return <div>Loading</div>;
            }
            if (error) return <div>Error</div>;
            
            this.subscribetoNewPosts(subscribeToMore)
            const list = data.posts;

            return (
              <div>
                {list.map((item, index) =>{
                  if(index === 0){
                    return(
                      <FeedItemMain data={item} />
                    )
                  }
                  return(
                    <FeedItem data={item} meta={item.postedBy}/>
                  )
                  
                }
                )}
              </div>
            );
          }}
        </Query>
      </div>
    );
  }
}
const POST_SUBSCRIPTION = gql`
subscription{
  newPost{
    id
    title
    content
    createdAt
    postedBy{
      id
      username
      profileImage
      fullName
    }
    likes{
      id
    }
    images
    tags
    reading{
      id
    }
  }
}
`

const FEED_QUERY = gql`
  {
    posts {
      id
      title
      content
      tags
      createdAt
      images
      likes{
        id
      }
      reading{
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
export default Feed;
