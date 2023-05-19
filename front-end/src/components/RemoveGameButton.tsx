import { useMutation } from "@apollo/client";
import DELETE_GAME from "../mutations/DeleteGame";
import GET_ALL_GAMES from "../queries/GetAllGames";

//const RemoveGameButton = ({gameId, games, setGames}:{gameId: number, games:Game[], setGames:React.Dispatch<React.SetStateAction<Game[]>>}) => {
const RemoveGameButton = ({gameId}: {gameId: string}) => {

    const [deleteGameMutation, gameData] = useMutation(DELETE_GAME,{
        refetchQueries: [GET_ALL_GAMES]
    }); 
    
    return <button onClick={()=> {
        deleteGameMutation( {variables: { id: gameId } });
    }}>Delete Game</button>
}

export default RemoveGameButton