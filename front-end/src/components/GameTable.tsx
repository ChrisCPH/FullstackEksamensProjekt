import Game from '../classes/Game';
import GET_ALL_GAMES from '../queries/GetAllGames';
import RemoveGameButton from './RemoveGameButton';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useQuery, useMutation } from "@apollo/client";

//const GameTable = ({games, setGames}:{games:Game[], setGames:React.Dispatch<React.SetStateAction<Game[]>>}) => {
const GameTable = () => {
    const { loading, error, data, fetchMore } = useQuery(GET_ALL_GAMES); // fetchMore is designed for pagination. Second argument is optional variables.

    
    if (loading) return <>'Submitting...'</>;
    if (error) return <>`Submission error! ${error.message}`</>;

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
                </tr>
                </thead>
        {data.games.map((game : Game, index : number) => {
            return (
                <tbody key={game.id}>
                <tr>
                    <td>{game.title}</td>
                    <td>{game.price}€</td>
                    <td>{game.developer}</td>
                    <td>{game.publisher}</td>
                    <td>{game.releaseDate}</td>
                    <td><RemoveGameButton gameId={game.id!} /></td>
                </tr>
                </tbody>    
            );
        })}
        </table>
    </div>
    )
}

export default GameTable