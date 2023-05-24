import { useMutation, useQuery } from "@apollo/client";
import ADD_RATING_TO_GAME from "../mutations/AddRatingToGame";
import { SetStateAction, useEffect, useState } from "react";
import Game from "../classes/Game";
import GET_ALL_RATINGS from "../queries/GetAllRatings";
import GET_ALL_GAMES from "../queries/GetAllGames";
import GET_RATING_BY_ID from "../queries/GetRatingById";

const AddRatingToGameButton = ({ratingId}: {ratingId: string }) => {

    const gameQuery = useQuery(GET_ALL_GAMES)
    const { loading, error, data: foundRating, fetchMore } =  useQuery(GET_RATING_BY_ID, { variables: { ratingId }}); 

    const [gameId, setGameId] = useState("");
    const [firstPassed, setFirstPassed] = useState(false);
    const [isClaimed, setClaim] = useState(false)
    const [addRatingToGameMutation, ratingData] = useMutation(ADD_RATING_TO_GAME,{
        refetchQueries: [GET_ALL_RATINGS]
    }); 

    useEffect(() => {
        isRatingAlreadyAddedToAGame();
    })

    const isRatingAlreadyAddedToAGame = () => {
        if(error == null && foundRating != null) {

            const games: Game [] = JSON.parse(JSON.stringify(foundRating.rating!.games!))
            for(let i = 0; i < games.length; i++) {
                const game = games[i];
                
                if(game != null)
                {
                    setClaim(true);
                    break;
                }
            }
        }
    }

    const handleChange = (event: { target: { value: SetStateAction<string>; }; }) => {
        setGameId(event.target.value)
    }

    return (
        <>
        {isClaimed ? (
            <></>
        ) : (
            <div>
                <select value={gameId} onChange={handleChange}>
                    {gameQuery.data?.games?.map((game: Game) => <option key={game.id} value={game.id}>{game.title}</option>)}
                        
                    {gameQuery.data?.games?.map((game: Game) => {
                        if(!firstPassed) {
                            setGameId(game!.id!)
                            setFirstPassed(true);
                        }
                    })}
                </select>
                <button className="btn btn-primary" onClick={()=> {
                if(ratingId != null) {
                    addRatingToGameMutation( {variables: {input: {ratingId: ratingId, gameId: gameId } } });
                }
                }}>Add Game</button>
            </div>
        )}
      </>
    )
}

export default AddRatingToGameButton