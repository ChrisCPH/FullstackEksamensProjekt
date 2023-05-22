import { useMutation } from "@apollo/client";
import DELETE_RATING from "../mutations/DeleteRating";
import GET_ALL_RATINGS from "../queries/GetAllRatings";

const RemoveRatingButton = ({ratingId}: {ratingId: string}) => {

    const [deleteRatingMutation, ratingData] = useMutation(DELETE_RATING,{
        refetchQueries: [GET_ALL_RATINGS]
    }); 
    
    return <button className="btn btn-danger" onClick={()=> {
        deleteRatingMutation( {variables: { id: ratingId } });
    }}>Delete Rating</button>
}

export default RemoveRatingButton