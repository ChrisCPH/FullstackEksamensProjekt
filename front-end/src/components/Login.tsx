import React, { useState, useContext, useEffect } from "react";
import { UserContext } from "../contexts/UserContext";
import User from "../classes/User"
import makeOptions from "./MakeOptions";
import GameTable from "./GameTable";
import Game from "../classes/Game";
import { useQuery } from "@apollo/client";
import GET_ALL_GAMES from "../queries/GetAllGames";
import GameForm from "./GameForm";

const Login: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { dispatch } = useContext(UserContext);
  const { state } = useContext(UserContext);
  const [message, setMesage] = useState("")

    useEffect(() => {
        handleSession();
    })

    const [game, setGame] = useState<Game>({ title: "", price: 0, developer: "", publisher: "", releaseDate: ""});
    const { loading, error, data, fetchMore } = useQuery(GET_ALL_GAMES); // fetchMore is designed for pagination. Second argument is optional variables.


  const handleLogin = () => {
    //  login function that returns a user object with roles
    const user: User = { username, password, type: "admin" }; 

    if(username == "" || password == "")
        setMesage("No username or password specified!")

    const option = makeOptions("POST", user);
    fetch('http://localhost:5000/api/users/login', option)
    .then(data => data.json())
    .then(data => {
        // If the submition is okay
        if(data.status != "error") {
            const foundUser = data.user as User;
            dispatch({ type: "login", payload: foundUser });
            setMesage("");
            setToken(foundUser);
        }

        if(data.user == null)
            setMesage("The specified user couldn't be found!")
    })
  };

const handleSession = () =>  {
    const session = localStorage.getItem("loginToken");

    if(session != null) {
        const split = session!.split('|');

        // Username and password
        if(split[0] != "" && split[1] != "")
        {
            setUsername(split[0]);
            setPassword(split[1]);

            // TODO: Clean up & add middleware to make things easier in between components and stuff.
        }
    }

  }

  const handleLogout = () => {
    localStorage.removeItem("loginToken");
    dispatch({ type: "logout" });
  };

  function setToken(user : User) {
    localStorage.setItem("loginToken", user.username + "|" + user.password + "|");
  }

  return (
    <div className="col-auto">
      {state.user ? (
        <div>
          <div className="col-6 offset-3 text-center">
            <p>Logged in as <b>{state.user.username}</b></p>
            <button onClick={handleLogout}>Logout</button>
          </div>
          {/* <GameTable games={games} setGames={setGames} /> */}
          <GameTable />
          <GameForm game={game} setGame={setGame} />
          {/* <AddGameForm games={games} setGames={setGames} /> */}
        </div>
      ) : (
        <div>

      { message ?
        <div className="alert alert-danger" role="alert">{message}</div>
      : <div className="display: hidden;"></div>
      }
                    
                <label>Username</label>
                <input
                    type="text"
                    placeholder="Username"  
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    onKeyDown={e => e.key == 'Enter' ? handleLogin() : null}
                />
                <label>Password</label>
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    onKeyDown={e => e.key == 'Enter' ? handleLogin() : null}
                />
                <button onClick={handleLogin}>Login</button>
        </div>
      )}
    </div>
  );
};

export default Login;