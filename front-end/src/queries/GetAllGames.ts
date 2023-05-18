import {gql} from '@apollo/client';

const GET_ALL_GAMES = gql`
query Games {
  games {
    id
    developer
    price
    publisher
    releaseDate
    title
    ratings {
      id
      rating
    }
    gameOwners {
      id
      username
    }
  }
}
`;
export default GET_ALL_GAMES;