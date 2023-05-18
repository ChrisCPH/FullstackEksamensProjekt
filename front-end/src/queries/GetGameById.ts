import {gql} from '@apollo/client';

const GET_GAME_BY_ID = gql`
query Game($gameId: ID) {
    game(id: $gameId) {
      id
      title
      price
      publisher
      developer
      releaseDate
      ratingAverage
      gameOwners {
        id
        username
      }
      ratings {
        id
        rating
      }
    }
  }
`;
export default GET_GAME_BY_ID;