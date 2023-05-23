import {gql} from '@apollo/client';

const CREATE_GAME = gql`
    mutation CreateGame($input: GameInput!) {
        createGame(input: $input) {
            id
            title
            releaseDate
            price
            developer
            publisher
            ratingAverage
        }
    }
`;
export default CREATE_GAME;