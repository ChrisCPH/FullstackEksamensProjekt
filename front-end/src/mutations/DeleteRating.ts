import {gql} from '@apollo/client';


const DELETE_RATING = gql`
mutation DeleteRating($id: ID!) {
    deleteRating(id: $id) 
  }
`;
export default DELETE_RATING;