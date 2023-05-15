import Game from '../classes/Game';
import RemoveGameButton from './RemoveGameButton';
import 'bootstrap/dist/css/bootstrap.min.css';


const GameTable = ({games, setGames}:{games:Game[], setGames:React.Dispatch<React.SetStateAction<Game[]>>}) => {
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
                    <th>Platform</th>       
                </tr>
                </thead>
        {games.map((game) => {
            return (
                <tbody key={game._id}>
                <tr>
                    {/* <td>{game._id}</td> */}
                    <td>{game.title}</td>
                    <td>{game.price}€</td>
                    <td>{game.developer}</td>
                    <td>{game.publisher}</td>
                    <td>{game.releaseDate}</td>
                    <td><RemoveGameButton gameId={game._id} games={games} setGames={setGames} /></td>
                </tr>
                </tbody>    
            );
        })}
        </table>
    </div>
    )
}

export default GameTable