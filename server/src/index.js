const { GraphQLServer } = require("graphql-yoga");
const { ApolloServer, gql } = require("apollo-server");
const { prisma } = require("./generated/prisma-client");
const Mutation = require("./resolvers/Mutation");
const Query = require("./resolvers/Query");
const User = require("./resolvers/User");
const Post = require("./resolvers/Post");
const Like = require("./resolvers/Like");
const Subscription = require("./resolvers/Subscription");
const Comment = require("./resolvers/Comment");

const resolvers = {
  Query,
  Mutation,
  User,
  Post,
  Like,
  Subscription,
  Comment
};

const server = new GraphQLServer({
  typeDefs: "./schema.graphql",
  resolvers,
  context: request => ({
    ...request,
    prisma
  })
});
server.start(() => console.log(`Server ready at localhost: 4000}`));
