const types = `#graphql
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

export default types