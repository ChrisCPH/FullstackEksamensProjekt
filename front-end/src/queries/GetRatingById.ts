import {gql} from '@apollo/client';

const GET_RATING_BY_ID = gql`
query Rating($ratingId: ID) {
    rating(id: $ratingId) {
      id
      rating
      comment
      games {
        id
        title
      }
      users {
        id
        username
      }
    }
  }
`;
export default GET_RATING_BY_ID;