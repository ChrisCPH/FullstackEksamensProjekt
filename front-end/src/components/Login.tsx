import React, { useState, useContext, useEffect } from "react";
import User from "../classes/User"
import makeOptions from "./MakeOptions";
import { useNavigate } from "react-router-dom";

const Login: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMesage] = useState("")
  const [user, setUser] = useState<User | null>();
  const navigate = useNavigate();


  useEffect(() => {
      handleSession();
  })

  const handleLogin = () => {
    //  login function that returns a user object with roles
    const user: User = { username, password}; 

    if(username == "" || password == "")
        setMesage("No username or password specified!")

    const option = makeOptions("POST", user);
    fetch('http://localhost:5000/api/users/login', option)
    .then(data => data.json())
    .then(data => {
        // If the submition is okay
        if(data.status != "error") {
            const foundUser = data.user as User;
            foundUser.id = data.user._id;
            setMesage("");
            setUser(foundUser);
            setToken(foundUser);

            navigate("/games");
        }

        if(data.user == null)
            setMesage("The specified user couldn't be found!")
    })
  };

const handleSession = () =>  {
    const session = localStorage.getItem("loginToken");

    if(session != null) {
        const currentUser = JSON.parse(session) as User;
        if(currentUser != null) {
          setUsername(currentUser.username);
          setPassword(currentUser.password);

          if(!user) handleLogin();
        }
    }
}

  const handleLogout = () => {
    localStorage.removeItem("loginToken");
    setUser(null);
  };

  function setToken(user : User) {
    localStorage.setItem("loginToken", JSON.stringify(user));
  }

  return (
    <div className="col-auto">
      {user ? (
        <div>
          <div className="col-6 offset-3 text-center">
            <p>Logged in as <b>{user!.username}</b></p>
            <button onClick={handleLogout}>Logout</button>
          </div>
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
                <button onClick={handleLogin}>Log In</button>
        </div>
      )}
    </div>
  );
};

export default Login;