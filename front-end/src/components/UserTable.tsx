import 'bootstrap/dist/css/bootstrap.min.css';
import { useQuery, useMutation} from '@apollo/client';
import User from '../classes/User';
import Header from './Header';
import EditUserButton from './EditUserButton';
import Game from '../classes/Game';
import Rating from '../classes/Rating';
import GET_USER_BY_ID from '../queries/GetUserById';

const UserTable = () => {

    const currentUser = JSON.parse(localStorage.getItem("loginToken")!) as User;
    const userId = currentUser.id
    const { loading, error, data, fetchMore } = useQuery(GET_USER_BY_ID, { variables: { userId }}); 

    if (loading) return <>'Loading User List...'</>;
    if (error) return <>`User List Error! ${error.message}`</>;

    const GameArray = () => {
        return( 
            data.user.gamesOwned.map((game:Game) => {
                return (
                    <p key={game.id}>{game.title}</p>
                )
            })
        )
    }

    const RatingArray = () => {
        return( 
            data.user.ratings.map((rating:Rating) => {
                return (
                    <p key={rating.id}>{rating.rating}/5</p>
                )
            })
        )
    }

    return (
        <div>
            <Header />
            <h1 className="text-center">Profile</h1>
            <table className="table">
                <thead>
                <tr>
                    <th>Username</th>
                    <th>Password</th>
                    <th>GamesOwned</th>
                    <th>Ratings</th>
                </tr>
                </thead>
                <tbody key={currentUser.id}>
                <tr>
                    <td>{currentUser.username}</td>
                    <td>{currentUser.password}</td>
                    <td><GameArray /></td>
                    <td><RatingArray /></td>
                </tr>
                </tbody>    
        </table>
    </div>
    )
}

export default UserTable