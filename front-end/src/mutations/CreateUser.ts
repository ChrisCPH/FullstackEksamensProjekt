import {gql} from '@apollo/client';


const CREATE_USER = gql`
    mutation CreateUser($input: UserInput!) {
        createUser(input: $input) {
            username
            password
        }
    }
`;
export default CREATE_USER;