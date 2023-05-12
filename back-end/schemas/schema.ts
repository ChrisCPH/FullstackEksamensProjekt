// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.
const typeDefs = `#graphql
  type Game {
    id: ID!
    title: String!
    releaseDate: String
    price: Int
    developer: String
    publisher: String
    ratings: [Rating!]!
    ratingAverage: Float
    soldGames: [UserOwnedGame!]!
    soldGamesCount: Int
  }

  type Rating {
    id: ID!
    rating: Int!
    comment: String
    game: Game!
    user: User!
  }

  type User {
    id: ID!
    username: String!
    password: String!
    ratings: [Rating!]!
    gamesOwned: [UserOwnedGame!]!
    gamesOwnedCount: Int
  }

  type UserOwnedGame {
    id: ID!
    game: Game!
    user: User!
  }

  type Query {
    games: [Game!]!
    game(id: ID): Game
    ratings: [Rating!]!
    rating(id: ID): Rating
    users: [User!]!
    user(id: ID): User
    userOwnedGames: [UserOwnedGame!]!
    userOwnedGame(id: ID): UserOwnedGame
  }

  type Mutation {
    # Game
    createGame(input: GameInput!): Game
    deleteGame(id: ID!) : Boolean
    updateGame(id: ID!, input: GameInput!): Game
    # Rating
    createRating(input: RatingInput!): Rating
    deleteRating(id: ID!): Boolean
    updateRating(id: ID!, input: RatingInput!): Rating
    # User
    createUser(input: UserInput!): User
    deleteUser(id: ID!): Boolean
    updateUser(id: ID!, input: UserInput!): User
    # UserOwnedGame
    createUserOwnedGame(input: UserOwnedGameInput!): UserOwnedGame
    deleteUserOwnedGame(id: ID!): Boolean
    updateUserOwnedGame(id: ID!, input: UserOwnedGameInput!): UserOwnedGame
  }

  input GameInput {
    title: String!
    releaseDate: String
    price: Int
    developer: String
    publisher: String
  }

  input RatingInput {
    rating: Int!
    comment: String
    gameId: ID!
    userId: ID!
  }

  input UserInput {
    username: String!
    password: String!
  }

  input UserOwnedGameInput {
    gameId: ID!
    userId: ID!
  }
`;

export default typeDefs;