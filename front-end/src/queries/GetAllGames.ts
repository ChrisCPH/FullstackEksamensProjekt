import {gql} from '@apollo/client';

const GET_ALL_GAMES = gql`
query GetAllGames {
    games{
      id
      title
      price
      publisher
      releaseDate
    }
  }
`;
export default GET_ALL_GAMES;