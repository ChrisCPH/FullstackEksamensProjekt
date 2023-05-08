import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import games from './data'
import types from "./types/graphql/types"

// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.
const typeDefs = `#graphql
  # Comments in GraphQL strings (such as this one) start with the hash (#) symbol.

  type Game {
    id: ID!
    title: String
    releaseData: String
    price: Int
    developer: String
    publisher: String
  }

  # The "Query" type is special: it lists all of the available queries that
  # clients can execute, along with the return type for each. In this
  # case, the "books" query returns an array of zero or more Books (defined above).
  type Query {
    games: [Game]
  }

  type Mutation {
    # Game
    addGame(input:GameInput) : Game
    deleteGame(id:ID!) : Game
  }


  input GameInput {
    title: String
    releaseData: String
    price: Int
    developer: String
    publisher: String
  }
`;

  // Resolvers define how to fetch the types defined in your schema.
// This resolver retrieves books from the "books" array above.
const resolvers = {
  Query: {
    games: () => games,
  },

  // Methods
  Mutation: {
    addGame: (_parent, {input}, _context) => {
      const game = {
        id: games.length + 1,
        title: input.title,
        releaseData: input.releaseData,
        price: input.price,
        developer: input.developer,
        publisher: input.publisher
      }
      games.push(game);
      return game;
    },
    deleteGame: (_parent, {id}, _context) => {
      const game = games.find(book => book.id === id);
      games.splice(games.indexOf(game));
      return game;
    },

  }
};

// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const graphqlServer = new ApolloServer({
  typeDefs,
  resolvers,
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