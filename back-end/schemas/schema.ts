const typeDefs = `#graphql
  type Game {
    id: ID!
    title: String!
    releaseDate: String
    price: Int
    developer: String
    publisher: String
    ratings: [Rating]
    ratingAverage: Float
    gameOwners: [User]
  }

  type Rating {
    id: ID!
    rating: Int!
    comment: String
    users: [User]
    games: [Game]
  }

  type User {
    id: ID!
    username: String!
    password: String!
    ratings: [Rating]
    gamesOwned: [Game]
  }

  type Query {
    games: [Game]
    game(id: ID): Game
    ratings: [Rating]
    rating(id: ID): Rating
    users: [User]
    user(id: ID): User
  }

  type Mutation {
    # Game
    createGame(input: GameInput!): Game
    deleteGame(id: ID!) : Boolean
    updateGame(id: ID!, input: GameInput!): Game
    addGameToUser(input: UserGameInput!): User
    # Rating
    createRating(input: RatingInput!): Rating
    deleteRating(id: ID!): Boolean
    updateRating(id: ID!, input: RatingInput!): Rating
    addRatingToGame(input: RatingGameInput!): Game
    addRatingToUser(input: RatingUserInput!): User
    # User
    createUser(input: UserInput!): User
    deleteUser(id: ID!): Boolean
    updateUser(id: ID!, input: UserInput!): User
    
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
  }

  input UserInput {
    username: String!
    password: String!
  }

  input UserGameInput {
    gameId: ID!
    userId: ID!
  }

  input RatingGameInput {
    ratingId: ID!
    gameId: ID!
  }

  input RatingUserInput {
    ratingId: ID!
    userId: ID!
  }
`;

export default typeDefs;