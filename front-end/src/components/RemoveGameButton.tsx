import Game from "../classes/Games";
import MakeOptions from "./MakeOptions";

const RemoveGameButton = ({gameId, games, setGames}:{gameId: number, games:Game[], setGames:React.Dispatch<React.SetStateAction<Game[]>>}) => {
    return <button onClick={()=> {
        const options = MakeOptions("DELETE");
        fetch('http://localhost:3001/game/' + gameId, options)
        games.splice(gameId - 1, 1);
        setGames([...games]); 
    }}>Delete Game</button>
}

export default RemoveGameButton