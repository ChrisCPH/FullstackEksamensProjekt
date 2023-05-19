import { useMutation, useQuery } from "@apollo/client";
import ADD_GAME_TO_USER from "../mutations/AddGameToUser";
import GET_GAME_BY_ID from "../queries/GetGameById";
import GET_ALL_GAMES from "../queries/GetAllGames";

const ClaimGameButton = ({gameId, userId}: {gameId: string, userId : string}) => {

    const [addGameToUserMutation, gameData] = useMutation(ADD_GAME_TO_USER,{
        refetchQueries: [GET_ALL_GAMES]
    }); 
    const { loading, error, data: foundGame, fetchMore } =  useQuery(GET_GAME_BY_ID, { variables: { gameId }}); 
    
    return <button className="btn btn-primary" onClick={()=> {
        if(foundGame != null && gameId != null) {
            addGameToUserMutation( {variables: {input: {gameId: gameId, userId: userId } } });
            alert(`You have claimed the game: ${foundGame.game.title} and added it to your owned games!`);
        }
    }}>Claim Game</button>
}

export default ClaimGameButton