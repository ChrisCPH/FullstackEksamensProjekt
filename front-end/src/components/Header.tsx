import {NavLink} from "react-router-dom";
import '../css/Header.css'

const Header = () => {
    
    return(
        <nav className="topnav">
            <NavLink to="/games"> Games </NavLink>
            <NavLink to="/ratings"> Ratings </NavLink>
            
        </nav>
    )
}

export default Header;