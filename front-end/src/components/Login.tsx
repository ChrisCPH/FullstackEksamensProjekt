import React, { useState, useContext, useEffect } from "react";
import { UserContext } from "../contexts/UserContext";
import User from "../classes/User"
import makeOptions from "./MakeOptions";
import { makeid } from "../classes/TextGenerator";

const Login: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { dispatch } = useContext(UserContext);
  const { state } = useContext(UserContext);
  const [message, setMesage] = useState("")

    useEffect(() => {
        handleSession();
    })

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
    localStorage.setItem("loginToken", user.username + "|" + user.password + "|" + makeid(8));
  }

  return (
    <div>
      {state.user ? (
        <div>
          <p>Logged in as {state.user.username}</p>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <div>
                {(
                    <div className="alert alert-danger" role="alert">
                        {message}
                    </div>
                )}

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