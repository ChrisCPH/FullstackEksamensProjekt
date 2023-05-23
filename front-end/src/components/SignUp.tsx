import { useEffect, useState } from "react";
import User from "../classes/User";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useMutation } from "@apollo/client";
import CREATE_USER from "../mutations/CreateUser";
import { useNavigate, NavLink } from "react-router-dom";

const SignUp = () => {
 
    const [_user, _setUser] = useState<User>({ username: "", password: "" })
    const [errorMsg, setError] = useState('');
    const [createUserMutation] = useMutation(CREATE_USER);
    const navigate = useNavigate();

    const createuser = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if(!_user.username){
            setError('Please fill in all fields.'); 
            return;
        }
        createUserMutation({ variables: {input: { username: _user.username, password: _user.password } }} );
    }

    const handleSignUp = () => {
        navigate("/login");
    };

    return (
        <div>
            <h2 className="text-red-400">{errorMsg}</h2>
            <form onSubmit={createuser}>
                <h3>Sign up</h3>
                <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input className="form-control" type="text" id="username" placeholder="Username" onChange={(evt) => _setUser({ ..._user, username: evt.target.value })}  value={_user.username} name="username" />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input className="form-control" type="password" id="password" placeholder="Password" onChange={(evt) => { _setUser({ ..._user, password: evt.target.value })}} value={_user.password} name="password" />
                </div>               
            <button className="btn btn-primary" onClick={handleSignUp}>Sign up</button>
            </form>
        </div>
    )
}

export default SignUp