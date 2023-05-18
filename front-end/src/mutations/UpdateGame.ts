import {gql} from '@apollo/client';

const UPDATE_GAME = gql`
mutation UpdateGame($input: GameInput!, $id: ID!) {
    updateGame(id: $id, input: $input) {
      id
      title
      developer
      price
      publisher
      releaseDate
    }
  }
`;
export default UPDATE_GAME;