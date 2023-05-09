// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.
const typeDefs = `#graphql
  # Comments in GraphQL strings (such as this one) start with the hash (#) symbol.

  type Game {
    id: ID!
    title: String
    releaseDate: String
    price: Int
    developer: String
    publisher: String
  }

  # The "Query" type is special: it lists all of the available queries that
  # clients can execute, along with the return type for each. In this
  # case, the "books" query returns an array of zero or more Books (defined above).
  type Query {
    games: [Game!]!
    game(id: ID): Game
  }

  type Mutation {
    # Game
    createGame(title : String!, price : Int, releaseData : String!, developer : String!, publisher : String!) : Game
    deleteGame(id: ID!) : Boolean
    updateGame(id : ID!,  title : String!, price : Int, releaseData : String!, developer : String!, publisher : String!) : Game
  }


  input GameInput {
    title: String
    releaseData: String
    price: Int
    developer: String
    publisher: String
  }
`;

export default typeDefs;