import {gql} from '@apollo/client';


const ADD_RATING_TO_GAME = gql`
mutation AddRatingToGame($input: RatingGameInput!) {
    addRatingToGame(input: $input) {
      id
      title
      ratings {
        id
        rating
      }
    }
  }
`;
export default ADD_RATING_TO_GAME;