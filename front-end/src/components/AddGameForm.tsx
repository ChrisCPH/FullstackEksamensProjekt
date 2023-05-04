import { useState } from "react"
import Game from "../classes/Games"
import MakeOptions from "./MakeOptions"
import 'bootstrap/dist/css/bootstrap.min.css';

const AddGameForm = ({games, setGames}:{games:Game[], setGames:React.Dispatch<React.SetStateAction<Game[]>>}) => {

    const [input, setInput] = useState({name:"", price: 0, developer:"", publisher:"", release_date:"", platform:""})

    const handleChange = (event:React.ChangeEvent<HTMLInputElement>):void => {
        setInput({
            ...input,
            [event.target.name]: event.target.value
        })
    }

    const handleClick = (event:React.MouseEvent<HTMLButtonElement>):void => {
        event.preventDefault();
        const newGame = new Game(games.length + 1, input.name, input.price, input.developer, input.publisher, input.release_date, input.platform.split(" "))
        const options = MakeOptions("POST", newGame);
        fetch('http://localhost:3001/game',options);
        games.push(newGame);
        setGames([...games])
        setInput({name:"", price: 0, developer:"", publisher:"", release_date:"", platform:""});
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

                <div className="form-group">
                    <label htmlFor="price">Platform</label>
                    <input className="form-control" placeholder="Platform" onChange={handleChange} value={input.platform} name="platform" />
                </div>
            </form>
            <button className="btn btn-primary" onClick={handleClick}>
                Add game
            </button>
        </div>
    )
}

export default AddGameForm