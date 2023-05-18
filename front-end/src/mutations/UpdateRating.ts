import {gql} from '@apollo/client';

const UPDATE_RATING = gql`
mutation UpdateRating($input: RatingInput!, $id: ID!) {
    updateRating(id: $id, input: $input) {
      id
      rating
      comment
    }
  }
`;
export default UPDATE_RATING;