import {gql} from '@apollo/client';


const CREATE_USER_OWNED_GAMES = gql`
    mutation CreateUserOwnedGame($input: UserOwnedGameInput!){
        createUserOwnedGame(input: $input) {
            id
            game {
                id
                title
            }
            user {
                id
                username
            }
        }
    }
`;
export default CREATE_USER_OWNED_GAMES;