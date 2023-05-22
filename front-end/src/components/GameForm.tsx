import { useEffect, useState } from "react"
import Game from "../classes/Game"
import 'bootstrap/dist/css/bootstrap.min.css';
import { useMutation } from "@apollo/client";
import CREATE_GAME from "../mutations/CreateGame";
import GET_ALL_GAMES from "../queries/GetAllGames";
import UPDATE_GAME from "../mutations/UpdateGame";

const GameForm = ({existingGame, setGame} : {existingGame : Game, setGame:(game: Game) => void}) => {

    const [_game, _setGame] = useState<Game>({ title: "", price: 0, developer: "", publisher: "", releaseDate: "", ratingAverage: 0 })
    const [hasExistingGame, setExistingGame] = useState(false)
    const [errorMsg, setError] = useState('');
    const [createGameMutation, { data, loading, error }] = useMutation(CREATE_GAME, { refetchQueries: [GET_ALL_GAMES] }); //mutateFunction is the function to call for server update. refetchQueries is the list of queries to refetch after the mutation is done. And if they were used with useQuery, they will be updated with the new data.
    const [updateGameMutation, gameData] = useMutation(UPDATE_GAME,{
        refetchQueries: [GET_ALL_GAMES] // Updates page by refetching data from server.

        // Update cache without refetching by using the update function
        // update: (cache, { data: { updatePerson: updateGame } }) => {
        //     console.log('updatePerson: ',updateGame); // updatePerson is the response from the server. Must be the right name here of the data.

        //     const readQ  = cache.readQuery({ query: GET_ALL_GAMES });
        //     const games = (readQ as {games: Game[]}).games;
        //     const listIndexOfChangedGame = games.findIndex((game) => game.id === updateGame.id);

        //     cache.writeQuery({
        //         query: GET_ALL_GAMES,
        //         data: {
        //             persons: [
        //                 ...games.slice(0, listIndexOfChangedGame),
        //                 updateGame,
        //                 ...games.slice(listIndexOfChangedGame + 1)
        //             ]
        //         },
        //     });
        //}
    });

   const createGame = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if(!_game.title){
        setError('Please fill in all fields.'); 
        return;
    }

    //createGameMutation({ variables: {input: _game}} );
    createGameMutation({ variables: {input: { title: _game.title, price: _game.price, developer: _game.developer, publisher: _game.publisher, releaseDate: _game.releaseDate } }} );
    }

    useEffect(() => {

        if(existingGame.id != "" && !hasExistingGame) {
            _game.id = existingGame.id;
            _game.title = existingGame.title;
            _game.price = existingGame.price;
            _game.developer = existingGame.developer;
            _game.publisher = existingGame.publisher;
            _game.releaseDate = existingGame.releaseDate;
            setExistingGame(true);
        }
    })

    const editGame = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if(!_game.title) {
            setError('Please fill in all fields');
            return;
        }

        // Hacky as the Apollo server is super picky about the additional new value fields!
        updateGameMutation({ variables: { id: _game!.id, input: { title: _game.title, price: _game.price, developer: _game.developer, publisher: _game.publisher, releaseDate: _game.releaseDate } } });
        //updateGameMutation({ variables: { id: existingGame!.id, input: _game } });
        setError('');
    }

    if (loading || gameData.loading) return <>'Creating/update game...'</>;
    //if (error || gameData.error) return <>`Create game error! ${error?error.message:gameData.error}`</>;

    return (
        <div>
            <h2 className="text-red-400">{errorMsg}</h2>
            <form onSubmit={existingGame.id?editGame:createGame}>
                <h3>Add/Edit Game</h3>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input className="form-control" type="text" id="title" placeholder="Title" onChange={(evt) => { _setGame({ ..._game, title: evt.target.value })}} value={_game.title} name="title" />
                </div>

                <div className="form-group">
                    <label htmlFor="price">Price</label>
                    <input className="form-control" type="number" id="price" placeholder="Price" onChange={(evt) => _setGame({ ..._game, price: parseInt(evt.target.value) })}  value={_game.price} name="price" />
                </div>

                <div className="form-group">
                    <label htmlFor="price">Developer</label>
                    <input className="form-control" type="text" placeholder="Developer" onChange={(evt) => _setGame({ ..._game, developer: evt.target.value })}  value={_game.developer} name="developer" />
                </div>

                <div className="form-group">
                    <label htmlFor="price">Publisher</label>
                    <input className="form-control" type="text" placeholder="Publisher" onChange={(evt) => _setGame({ ..._game, publisher: evt.target.value })}  value={_game.publisher} name="publisher" />
                </div>

                <div className="form-group">
                    <label htmlFor="price">Release Date</label>
                    <input className="form-control" type="text" placeholder="Release date" onChange={(evt) => _setGame({ ..._game, releaseDate: evt.target.value })}  value={_game.releaseDate} name="releaseDate" />
                </div>
            <button className="btn btn-primary">
            {existingGame.id? "Update Game" : "Add Game"}
            </button>
            </form>
        </div>
    )
}

export default GameForm