import Rating from '../classes/Rating';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useQuery, useMutation } from "@apollo/client";
import User from '../classes/User';
import Game from '../classes/Game';
import GET_ALL_RATINGS from '../queries/GetAllRatings';
import RemoveRatingButton from './RemoveRatingButton';

const RatingTable = () => {
    const { loading, error, data, fetchMore } = useQuery(GET_ALL_RATINGS);
    const currentUser = JSON.parse(localStorage.getItem("loginToken")!) as User;

    if (loading) return <>'Loading Rating List...'</>;
    if (error) return <>`Rating List Error! ${error.message}`</>;

    type ArrayProps = {
        ratingIndex: number;
    }

    const GameArray = ({ratingIndex}: ArrayProps) => {
        return( 
            data.ratings[ratingIndex].games.map((game:Game) => {
                return (
                    <p key={game.id}>{game.title}</p>
                )
            })
        )
    }

    const UserArray = ({ratingIndex}: ArrayProps) => {
        return( 
            data.ratings[ratingIndex].users.map((user:User) => {
                return (
                    <p key={user.id}>{user.username}</p>
                )
            })
        )
    }

    return (
        <div>
            <h1 className="text-center">Ratings</h1>
            
            <table className="table">
                <thead>
                <tr>
                    <th>Rating</th>
                    <th>Comment</th>
                    <th>Game</th>
                    <th>User</th>
                </tr>
                </thead>
        {data.ratings.map((rating : Rating, index : number) => {
            return (
                <tbody key={rating.id}>
                <tr>
                    <td>{rating.rating}</td>
                    <td>{rating.comment}</td>
                    <td><GameArray ratingIndex={index} /></td>
                    <td><UserArray ratingIndex={index} /></td>
                    <td>
                        <RemoveRatingButton ratingId={rating.id!} />
                    </td>
                </tr>
                </tbody>    
            );
        })}
        </table>
    </div>
    )
}

export default RatingTable