import { useEffect, useState } from "react";
import Rating from "../classes/Rating";
import Game from "../classes/Game";
import User from "../classes/User";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useMutation } from "@apollo/client";
import CREATE_RATING from "../mutations/CreateRating";
import GET_ALL_RATINGS from "../queries/GetAllRatings";
import UPDATE_RATING from "../mutations/UpdateRating";

const RatingForm = ({existingRating, setRating} : {existingRating : Rating, setRating:(rating: Rating) => void}) => {
 
    const [_rating, _setRating] = useState<Rating>({ rating: 0, comment: "" })
    const [hasExistingRating, setExistingRating] = useState(false)
    const [errorMsg, setError] = useState('');
    const [createRatingMutation, { data, loading, error }] = useMutation(CREATE_RATING, { refetchQueries: [GET_ALL_RATINGS] });
    const [updateRatingMutation, RatingData] = useMutation(UPDATE_RATING,{
        refetchQueries: [GET_ALL_RATINGS]
    });

   const createRating = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if(!_rating.rating){
        setError('Please fill in all fields.'); 
        return;
    }

    createRatingMutation({ variables: {input: { rating: _rating.rating, comment: _rating.comment } }} );
    }

    useEffect(() => {

        if(existingRating.id != "" && !hasExistingRating) {
            _rating.id = existingRating.id;
            _rating.rating = existingRating.rating;
            _rating.comment = existingRating.comment;
            setExistingRating(true);
        }
    })

    const editRating = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if(!_rating.rating) {
            setError('Please fill in all fields');
            return;
        }

        updateRatingMutation({ variables: { id: _rating!.id, input: { rating: _rating.rating, comment: _rating.comment } } });
        setError('');
    }

    if (loading || RatingData.loading) return <>'Creating/update Rating...'</>;

    return (
        <div>
            <h2 className="text-red-400">{errorMsg}</h2>
            <form onSubmit={existingRating.id?editRating:createRating}>
                <h3>Add/Edit Rating</h3>
                <div className="form-group">
                    <label htmlFor="rating">Rating</label>
                    <input className="form-control" type="number" id="rating" placeholder="Rating" onChange={(evt) => _setRating({ ..._rating, rating: parseInt(evt.target.value) })}  value={_rating.rating} name="rating" />
                </div>
                <div className="form-group">
                    <label htmlFor="comment"></label>
                    <input className="form-control" type="text" id="comment" placeholder="Comment" onChange={(evt) => { _setRating({ ..._rating, comment: evt.target.value })}} value={_rating.comment} name="comment" />
                </div>               
            <button className="btn btn-primary">
            {existingRating.id? "Update Rating" : "Add Rating"}
            </button>
            </form>
        </div>
    )
}

export default RatingForm