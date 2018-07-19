const express = require('express');
const {ApolloServer} = require('apollo-server');
const {typeDefs, resolvers} = require('./schema.ts');

const PORT = 4000;
const app = express();
const apolloServer = new ApolloServer({
  typeDefs,
  resolvers
});

apolloServer.applyMiddleware({app});

app.listen({port: PORT}, () => {
  const path = apolloServer.graphqlPath;
  console.log(`🚀 Server ready at http://localhost:${PORT}${path}`);
});
