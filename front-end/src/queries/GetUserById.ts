import {gql} from '@apollo/client';

const GET_USER_BY_ID = gql`
query User($userId: ID) {
    user(id: $userId) {
      id
      username
      password
      ratings {
        id
        rating
      }
      gamesOwned {
        id
        title
      }
    }
  }
`;
export default GET_USER_BY_ID;