const {gql} = require('apollo-server');
const {find, filter} = require('lodash');
const axios = require('axios');
// Type definitions define the "shape" of your data and specify
// which ways the data can be fetched from the GraphQL server.
const typeDefs = gql`
  # Comments in GraphQL are defined with the hash (#) symbol.

  # This "User" type can be used in other type declarations.
  type User {
    id: String,
    name: String,
    username: String,
    email: String,
    phone: String,
    website: String,
  }
  type Post {
    id: String
    title: String 
    authorId: String!
  }
  # The "Query" type is the root of all GraphQL queries.
  # (A "Mutation" type will be covered later on.)
  type Query {
    users: [User]
    user(id:String!): User
  }
`;


// Resolvers define the technique for fetching the types in the
// schema.  We'll retrieve users from the "users" array above.
const baseUrl = 'http://localhost:3000';
const resolvers = {
  Query: {
    users: (root, args, context, info) => axios.get(`${baseUrl}/users`).then(x => x.data),
    user: (root, args) => axios.get(`${baseUrl}/users/${args.id}`).then(x => x.data)
  }
};

module.exports = {resolvers, typeDefs};
