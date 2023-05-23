import {gql} from '@apollo/client';

const GET_ALL_RATINGS = gql`
query Ratings {
    ratings {
      id
      comment
      rating
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
export default GET_ALL_RATINGS;