import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import  typeDefs  from './schemas/schema'
import Mutation from './resolvers/mutation';
import Query from './resolvers/query';

  // Resolvers define how to fetch the types defined in your schema.
// This resolver retrieves books from the "books" array above.

// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const graphqlServer = new ApolloServer({
  typeDefs,
  resolvers: {
    Query,
    Mutation
  },
});

// Passing an ApolloServer instance to the `startStandaloneServer` function:
//  1. creates an Express app
//  2. installs your ApolloServer instance as middleware
//  3. prepares your app to handle incoming requests
export function startServer() {
  startStandaloneServer(graphqlServer, {
    listen: { port: 4000 },
  }).then(url => {
    console.log(`Apollo server is running *:${url}`);
  });
}

export default graphqlServer