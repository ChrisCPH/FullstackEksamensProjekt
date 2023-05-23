import {gql} from '@apollo/client';

const GET_ALL_USERS = gql`
query Users {
  users {
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
export default GET_ALL_USERS;
