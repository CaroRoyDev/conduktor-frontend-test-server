const { ApolloServer } = require("apollo-server");
const typeDefs = require("./schema");
const resolvers = require("./resolvers");
const mocks = require("./datasources/mocking");

const ConduktorTestAPI = require("./datasources/conduktor-test-api");

const server = new ApolloServer({
  typeDefs,
  mocks,
});

server.listen().then(() => {
  console.log(`
    🚀  Server is running!
    🔉  Listening on port 4000
    📭  Query at https://studio.apollographql.com/dev
  `);
});
