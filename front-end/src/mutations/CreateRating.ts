import {gql} from '@apollo/client';

const CREATE_RATING = gql`
    mutation CreateRating($input: RatingInput!){
        createRating(input: $input) {
            id
            rating
            comment
        }
    }
`;
export default CREATE_RATING;