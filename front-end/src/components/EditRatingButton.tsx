import { useEffect, useState } from "react";
import RatingForm from "./RatingForm";
import Rating from "../classes/Rating";

const EditRatingButton = ({existingRating, setRating} : {existingRating : Rating, setRating:(rating: Rating) => void}) => {

    const [shouldEdit, setShouldEdit] = useState(false)

    return (
        <>
        {shouldEdit ? (
            <RatingForm existingRating={existingRating} setRating={setRating} />
        ) : (
            <button className="btn btn-warning" onClick={()=> {
                setShouldEdit(true)
            }}>Edit Rating</button>
        )}
      </>
    )
}

export default EditRatingButton