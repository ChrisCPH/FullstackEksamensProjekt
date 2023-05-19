import { useState } from "react"
import Game from "../classes/Game"
import 'bootstrap/dist/css/bootstrap.min.css';
import { useQuery, useMutation } from "@apollo/client";
import CREATE_GAME from "../mutations/CreateGame";
import GET_ALL_GAMES from "../queries/GetAllGames";
import UPDATE_GAME from "../mutations/UpdateGame";

const AddGameForm = ({games, setGames}:{games:Game[], setGames:React.Dispatch<React.SetStateAction<Game[]>>}) => {

    const [input, setInput] = useState({name:"", price: 0, developer:"", publisher:"", release_date:""})

    const handleChange = (event:React.ChangeEvent<HTMLInputElement>):void => {
        setInput({
            ...input,
            [event.target.name]: event.target.value
        })
    }

    const [createGameMutation, { data, loading, error }] = useMutation(CREATE_GAME, { }); //mutateFunction is the function to call for server update. refetchQueries is the list of queries to refetch after the mutation is done. And if they were used with useQuery, they will be updated with the new data.
   const [updateGameMutation, gameData] = useMutation(UPDATE_GAME,{
       refetchQueries: [GET_ALL_GAMES]
   }); 

    const handleClick = (event:React.MouseEvent<HTMLButtonElement>):void => {
        event.preventDefault();
        const newGame =  { title: input.name, price: parseInt(input.price.toString()), developer: input.developer, publisher: input.publisher, releaseDate: input.release_date  }
        games.push(newGame as Game);
        setGames([...games])
        createGameMutation( {variables: { input: newGame } })
    }

    return (
        <div>
            <form>
                <h3>Add Game</h3>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input className="form-control" type="text" id="name" placeholder="Name" onChange={handleChange} value={input.name} name="name" />
                    {/* <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small> */}
                </div>

                <div className="form-group">
                    <label htmlFor="price">Price</label>
                    <input className="form-control" type="number" id="price" placeholder="Price" onChange={handleChange} value={input.price} name="price"></input>
                </div>

                <div className="form-group">
                    <label htmlFor="price">Developer</label>
                    <input className="form-control" type="text" placeholder="Developer" onChange={handleChange} value={input.developer} name="developer" />
                </div>

                <div className="form-group">
                    <label htmlFor="price">Publisher</label>
                    <input className="form-control" type="text" placeholder="Publisher" onChange={handleChange} value={input.publisher} name="publisher" />
                </div>

                <div className="form-group">
                    <label htmlFor="price">Release Date</label>
                    <input className="form-control" type="text" placeholder="Release date" onChange={handleChange} value={input.release_date} name="release_date" />
                </div>

                {/* <div className="form-group">
                    <label htmlFor="price">Platform</label>
                    <input className="form-control" placeholder="Platform" onChange={handleChange} value={input.platform} name="platform" />
                </div> */}
            </form>
            <button className="btn btn-primary" onClick={handleClick}>
                Add game
            </button>
        </div>
    )
}

export default AddGameForm