import {gql} from '@apollo/client';

const UPDATE_USER = gql`
mutation UpdateUser($id: ID!, $input: UserInput!) {
    updateUser(id: $id, input: $input) {
      id
      username
      password
    }
  }
`;
export default UPDATE_USER;