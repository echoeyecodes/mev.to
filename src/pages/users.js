import React from "react";
import Layout from "../layout/Layout";
import UserComponent from "../components/UserComponent";
import FeedItem from "../components/FeedItem";
import { Link } from "react-router-dom";
import Pill from "../components/Pill";
import { Query } from "react-apollo";
import gql from "graphql-tag";
const User = props => {
    const username = props.match.params.users
  return (
    <Layout>
      <Query query={USER_QUERY} variables={{ username }}>
        {({ loading, error, data }) => {
          if (loading) return <div>Loading</div>;
          if (error) return <div>Error</div>;
          const info = data.singleUser;
          return (
            <div>
              <UserComponent data={info} />
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "25% 50% 25%",
                  gridGap: "15px",
                  margin: "30px 10px 10px 10px"
                }}
              >
                <div>
                  <Pill
                    title="skills/languages"
                    content="JavaScript, React, React Native, Ruby on Rails, Node.js"
                  />
                  <Pill
                    title="learning/trying"
                    content="Always learning more! I mostly do React and React Native, but have also spent a lot of time learning about AI and deep learning. It's all exciting :)"
                  />
                </div>
                <Link style={{ textDecorationLine: "none" }} to="/">
                  {info.posts.map(item => <FeedItem data = {item} meta={info}/>)}
                </Link>
              </div>
            </div>
          );
        }}
      </Query>
    </Layout>
  );
};

const USER_QUERY = gql`
  query singleUser($username: String!) {
    singleUser(username: $username) {
      id
      username
      profileImage
      fullName
      posts {
        id
        title
        createdAt
        likes{
          id
        }
        reading{
          id
        }
        tags
      }
    }
  }
`;

export default User;
