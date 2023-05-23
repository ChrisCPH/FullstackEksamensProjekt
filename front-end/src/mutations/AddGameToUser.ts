import {gql} from '@apollo/client';


const ADD_GAME_TO_USER = gql`
mutation AddGameToUser($input: UserGameInput!) {
    addGameToUser(input: $input) {
      id
      username
      gamesOwned {
        id
        title
      }
    }
  }
`;
export default ADD_GAME_TO_USER;
