import { useState } from "react"
import Game from "../classes/Game"
import 'bootstrap/dist/css/bootstrap.min.css';
import { useMutation } from "@apollo/client";
import CREATE_GAME from "../mutations/CreateGame";
import GET_ALL_GAMES from "../queries/GetAllGames";
import UPDATE_GAME from "../mutations/UpdateGame";

const GameForm = ({game, setGame} : {game : Game, setGame:(game: Game) => void}) => {

    const [errorMsg, setError] = useState('');
    const [createGameMutation, { data, loading, error }] = useMutation(CREATE_GAME, { refetchQueries: [GET_ALL_GAMES] }); //mutateFunction is the function to call for server update. refetchQueries is the list of queries to refetch after the mutation is done. And if they were used with useQuery, they will be updated with the new data.
    const [updateGameMutation, gameData] = useMutation(UPDATE_GAME,{
       refetchQueries: [GET_ALL_GAMES]
   });

   const createGame = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if(!game.title){
        setError('Please fill in all fields.'); 
        return;
    }

    createGameMutation({ variables: {input: game}} );
    }

    const editPerson = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if(!game.title) {
            setError('Please fill in all fields');
            return;
        }
        updateGameMutation({ variables: {input: game, id: game.id} });
        setError('');
    }

    if (loading || gameData.loading) return <>'Submitting...'</>;
    if (error || gameData.error) return <>`Submission error! ${error?error.message:gameData.error}`</>;


    return (
        <div>
            <h2 className="text-red-400">{errorMsg}</h2>
            <form onSubmit={game.id?editPerson:createGame}>
                <h3>Add/Edit Game</h3>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input className="form-control" type="text" id="title" placeholder="Name" onChange={(evt) => setGame({ ...game, title: evt.target.value })} name="title" />
                </div>

                <div className="form-group">
                    <label htmlFor="price">Price</label>
                    <input className="form-control" type="number" id="price" placeholder="Price" onChange={(evt) => setGame({ ...game, price: parseInt(evt.target.value) })} name="price" />
                </div>

                <div className="form-group">
                    <label htmlFor="price">Developer</label>
                    <input className="form-control" type="text" placeholder="Developer" onChange={(evt) => setGame({ ...game, developer: evt.target.value })} name="developer" />
                </div>

                <div className="form-group">
                    <label htmlFor="price">Publisher</label>
                    <input className="form-control" type="text" placeholder="Publisher" onChange={(evt) => setGame({ ...game, publisher: evt.target.value })} name="publisher" />
                </div>

                <div className="form-group">
                    <label htmlFor="price">Release Date</label>
                    <input className="form-control" type="text" placeholder="Release date" onChange={(evt) => setGame({ ...game, releaseDate: evt.target.value })} name="releaseDate" />
                </div>
            <button className="btn btn-primary">
            {game.id? "Update Game" : "Add Game"}
            </button>
            </form>
        </div>
    )
}

export default GameForm