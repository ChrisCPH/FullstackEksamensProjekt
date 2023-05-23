import 'bootstrap/dist/css/bootstrap.min.css';
import User from '../classes/User';
import Header from './Header';

const UserTable = () => {
    const currentUser = JSON.parse(localStorage.getItem("loginToken")!) as User;

    return (
        <div>
            <Header />
            <h1 className="text-center">Profile</h1>
            <table className="table">
                <thead>
                <tr>
                    <th>Username</th>
                    <th>Password</th>
                </tr>
                </thead>
                <tbody key={currentUser.id}>
                <tr>
                    <td>{currentUser.username}</td>
                    <td>{currentUser.password}</td>
                </tr>
                </tbody>    
        </table>
    </div>
    )
}

export default UserTable