import { useMutation, useQuery } from "@apollo/client";
import ADD_GAME_TO_USER from "../mutations/AddGameToUser";
import GET_GAME_BY_ID from "../queries/GetGameById";
import GET_ALL_GAMES from "../queries/GetAllGames";
import { useEffect, useState } from "react";
import User from "../classes/User";

const ClaimGameButton = ({gameId, userId}: {gameId: string, userId : string}) => {

    const [isClaimed, setClaim] = useState(false)
    const [addGameToUserMutation, gameData] = useMutation(ADD_GAME_TO_USER,{
        refetchQueries: [GET_ALL_GAMES]
    }); 
    const { loading, error, data: foundGame, fetchMore } =  useQuery(GET_GAME_BY_ID, { variables: { gameId }}); 

    useEffect(() => {
        isGameAlreadyOwned();
    })

    const isGameAlreadyOwned = () => {
        if(error == null && foundGame != null) {

            const users: User[] = JSON.parse(JSON.stringify(foundGame!.game!.gameOwners!))
            for(let i = 0; i < users.length; i++) {
                const user = users[i];
                
                if(user.id == userId)
                {
                    //console.log("User already owns game: " + foundGame.game.title)
                    setClaim(true);
                    break;
                }
            }
        }
    }

    return (
        <>
        {isClaimed ? (
            <></>
        ) : (
            <button className="btn btn-primary" onClick={()=> {
                if(gameId != null) {
                    addGameToUserMutation( {variables: {input: {gameId: gameId, userId: userId } } });
                    alert(`You have claimed the game: ${foundGame.game.title} and added it to your owned games!`);
                }
            }}>Claim Game</button>
        )}
      </>
    )
}

export default ClaimGameButton