import {gql} from '@apollo/client';

const CREATE_RATING = gql`
    mutation CreateRating($ratingInput: RatingInput!) {
        createRating(input: $ratingInput) {
            id
            rating
            comment
            game {
                title
            }
            user {
                username
            }
        }
    }
`;
export default CREATE_RATING;