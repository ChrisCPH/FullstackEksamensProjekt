import {gql} from '@apollo/client';


const ADD_RATING_TO_USER = gql`
mutation AddRatingToUser($input: RatingUserInput!) {
    addRatingToUser(input: $input) {
      id
      username
      ratings {
        id
        rating
      }
    }
  }
`;
export default ADD_RATING_TO_USER;