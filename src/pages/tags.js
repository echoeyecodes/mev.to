import React from "react";
import Layout from "../layout/Layout";
import TagComponent from "../components/TagComponent";
import { Query } from "react-apollo";
import gql from "graphql-tag";
const Tags = props => {
  return (
    <div>
      <Layout>
        <Query query={TAG_QUERY}>
          {({ error, data, loading }) => {
            if (error)
              return <div style={{ marginTop: "80px" }}>error{`${error}`}</div>;
            if (loading)
              return <div style={{ marginTop: "80px" }}>Loading</div>;
            const list = data.posts;
            return <TagComponent data={list} tag={props.match.params.item} />;
          }}
        </Query>
      </Layout>
    </div>
  );
};

const TAG_QUERY = gql`
  {
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
      postedBy {
        fullName
        username
        profileImage
      }
    }
  }
`;

export default Tags;
