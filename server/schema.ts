const {gql} = require('apollo-server');
const users = require('./stubData/users.js');
const {find, filter} = require('lodash');

// Type definitions define the "shape" of your data and specify
// which ways the data can be fetched from the GraphQL server.
const typeDefs = gql`
  # Comments in GraphQL are defined with the hash (#) symbol.

  # This "User" type can be used in other type declarations.
  type TypeUserName {
    title: String
    first: String
    last: String
  }
  type TypeLocation {
    street: String
    city: String
    state: String
    postcode: Int,
  }
  type TypeDob {
    date: String
    age: Int
  }
  type TypeUserRegistered {
    date: String
    age: Int
  }
  type TypeUserPicture {
    large: String
    medium: String
    thumbnail: String
  }
  type User {
    gender: String  
    email: String
    phone: String
    cell: String
    id: String
    nat: String
    name: TypeUserName
    location: TypeLocation
    dob: TypeDob
    registered: TypeUserRegistered
    picture: TypeUserPicture
  }

  # The "Query" type is the root of all GraphQL queries.
  # (A "Mutation" type will be covered later on.)
  type Query {
    users: [User]
    user(id:String!): User
  }
`;

const usersList = users(50);

// Resolvers define the technique for fetching the types in the
// schema.  We'll retrieve users from the "users" array above.
const resolvers = {
  Query: {
    users: (root, args, context, info) => { console.log(root, args, context, info); return usersList; },
    user: (root, args) => find(usersList, x => args.id === x.id)
  }
};

module.exports = {resolvers, typeDefs};
