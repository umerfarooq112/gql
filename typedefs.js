const { gql } = require("apollo-server-express");
const typeDefs = gql`
  type Query {
    hello: String
    getAllPosts: [Post]
    findPost(id: ID): Post
  }
  type Post {
    id: ID
    title: String
    description: String
  }
  type Mutation {
    createPosts(input: PostInput): Post
    deletePost(id: ID): String
    updatePost(id: ID, post: PostInput): Post
  }

  input PostInput {
    title: String
    description: String
  }
`;

module.exports = typeDefs;
