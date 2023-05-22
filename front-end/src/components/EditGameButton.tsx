import { useEffect, useState } from "react";
import GameForm from "./GameForm";
import Game from "../classes/Game";

const EditGameButton = ({existingGame, newGame, setGame} : {existingGame : Game, newGame: Game, setGame:(game: Game) => void}) => {

    const [shouldEdit, setShouldEdit] = useState(false)

    return (
        <>
        {shouldEdit ? (
            <GameForm existingGame={existingGame} newGame={newGame} setGame={setGame} />
        ) : (
            <button className="btn btn-warning" onClick={()=> {
                setShouldEdit(true)
            }}>Edit Game</button>
        )}
      </>
    )
}

export default EditGameButton