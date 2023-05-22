import Game from '../classes/Game';
import GET_ALL_GAMES from '../queries/GetAllGames';
import RemoveGameButton from './RemoveGameButton';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useQuery, useMutation } from "@apollo/client";
import ClaimGameButton from './ClaimGameButton';
import User from '../classes/User';
import Rating from '../classes/Rating';

//const GameTable = ({games, setGames}:{games:Game[], setGames:React.Dispatch<React.SetStateAction<Game[]>>}) => {
const GameTable = () => {
    const { loading, error, data, fetchMore } = useQuery(GET_ALL_GAMES); // fetchMore is designed for pagination. Second argument is optional variables.
    const currentUser = JSON.parse(localStorage.getItem("loginToken")!) as User;

    if (loading) return <>'Loading Game List...'</>;
    if (error) return <>`Game List Error! ${error.message}`</>;

    type ArrayProps = {
        gameIndex: number;
    }
    
    const RatingArray = ({gameIndex}: ArrayProps) => {
        return( 
            data.games[gameIndex].ratings.map((rating:Rating) => {
                return (
                    <p key={rating.id}>{rating.rating}/5</p>
                )
            })
        )
    }

    return (
        <div>
            <h1 className="text-center">Games</h1>
            <table className="table">
                <thead>
                <tr>
                    {/* <th>Id</th> */}
                    <th>Name</th>
                    <th>Price</th>
                    <th>Developer</th>
                    <th>Publisher</th>
                    <th>Release date</th>
                    <th>Actions</th>
                    <th>Ratings</th>
                </tr>
                </thead>
                <tbody>
        {data.games.map((game : Game, index : number) => {
            return (
                
                <tr key={game.id}>
                    <td>{game.title}</td>
                    <td>{game.price}€</td>
                    <td>{game.developer}</td>
                    <td>{game.publisher}</td>
                    <td>{game.releaseDate}</td>
                    <td>
                        <ClaimGameButton gameId={game.id!} userId={currentUser!.id!} />
                        <RemoveGameButton gameId={game.id!} />
                    </td>
                    <td><RatingArray gameIndex={index} /></td>
                </tr>           
            );
        })}
            </tbody>
        </table>
    </div>
    )
}



export default GameTable