import {gql} from '@apollo/client';

const CREATE_GAME = gql`
    mutation CreateGame($gameInput: GameInput!) {
        createGame(input: $gameInput) {
            id
            title
            releaseDate
            price
            developer
            publisher
            ratings {
                rating
                comment
            }
            ratingAverage
            soldGames {
                game
                user
            }
            soldGamesCount
        }
    }
`;
export default CREATE_GAME;