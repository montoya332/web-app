const {gql} = require('apollo-server');
const {find, filter} = require('lodash');
const axios = require('axios');
// Type definitions define the "shape" of your data and specify
// which ways the data can be fetched from the GraphQL server.
const typeDefs = gql`
  # types & inputs
  type User {
    id: String
    name: String
    username: String
    email: String
    phone: String
    website: String
    posts: [Post]
  }
  input UserInput {
    id: String
    name: String
    username: String
    email: String
    phone: String
    website: String
  }
  type Post {
    id: String
    title: String 
    userId: String!
  }
  # The "Query" type is the root of all GraphQL queries.
  type Query {
    posts: [Post]
    post(id:String!): Post
    users: [User]
    user(id:String!): User
  }
  type Mutation {
    setUser(input: UserInput): User
  }
`;


// Resolvers define the technique for fetching the types in the
// schema.  We'll retrieve users from the "users" array above.
const baseUrl = 'http://localhost:3000';
const resolvers = {
  Query: {
    posts: () => axios.get(`${baseUrl}/posts`).then(x => x.data),
    post: (root, {id}) => axios.get(`${baseUrl}/posts/${id}`).then(x => x.data),
    users: () => axios.get(`${baseUrl}/users`).then(x => x.data),
    user: (root, {id}) => axios.get(`${baseUrl}/users/${id}`).then(x => x.data)
  },
  User: {
    posts(user) {
      return axios.get(`${baseUrl}/users/${user.id}/posts`).then(x => x.data);
    }
  },
  Mutation: {
    setUser: (root, {input}) => axios.post(`${baseUrl}/users`, input).then(x => x.data)
  }
};

module.exports = {resolvers, typeDefs};
