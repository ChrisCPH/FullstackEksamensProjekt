import { useMutation, useQuery } from "@apollo/client";
import ADD_RATING_TO_USER from "../mutations/AddRatingToUser";
import { useEffect, useState } from "react";
import User from "../classes/User";
import GET_ALL_RATINGS from "../queries/GetAllRatings";
import GET_RATING_BY_ID from "../queries/GetRatingById";

const AddRatingToUserButton = ({ratingId, userId}: {ratingId: string, userId : string}) => {

    const [isClaimed, setClaim] = useState(false)
    const [addRatingToUserMutation, ratingData] = useMutation(ADD_RATING_TO_USER,{
        refetchQueries: [GET_ALL_RATINGS]
    }); 
    const { loading, error, data: foundRating, fetchMore } =  useQuery(GET_RATING_BY_ID, { variables: { ratingId }}); 

    useEffect(() => {
        isRatingAlreadyAdded();
    })

    const isRatingAlreadyAdded = () => {
        if(error == null && foundRating != null) {

            const users: User[] = JSON.parse(JSON.stringify(foundRating!.rating!.users!))
            for(let i = 0; i < users.length; i++) {
                const user = users[i];
                
                if(user.id == userId)
                {
                    setClaim(true);
                    break;
                }
            }
        }
    }

    return (
        <>
        {isClaimed ? (
            <></>
        ) : (
            <button className="btn btn-primary" onClick={()=> {
                if(ratingId != null) {
                    addRatingToUserMutation( {variables: {input: {ratingId: ratingId, userId: userId } } });
                    //alert(`You have claimed the rating nand added it to your owned games!`);
                }
            }}>Claim Rating</button>
        )}
      </>
    )
}

export default AddRatingToUserButton