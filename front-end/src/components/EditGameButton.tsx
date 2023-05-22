import { useEffect, useState } from "react";
import GameForm from "./GameForm";
import Game from "../classes/Game";

const EditGameButton = ({game, setGame} : {game : Game, setGame:(game: Game) => void}) => {

    const [shouldEdit, setShouldEdit] = useState(false)

    return (
        <>
        {shouldEdit ? (
            <GameForm game={game} setGame={setGame} />
        ) : (
            <button className="btn btn-warning" onClick={()=> {
                setShouldEdit(true)
            }}>Edit Game</button>
        )}
      </>
    )
}

export default EditGameButton