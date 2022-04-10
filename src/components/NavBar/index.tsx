import { NavLink } from "react-router-dom";


const NavBar = () => {
    return (
        <div>
            <ul>
                <li><NavLink to='/'>HomePage</NavLink></li>
                <li><NavLink to='/quotes'>Quotes</NavLink></li>
                <li><NavLink to='/About'>About</NavLink></li>

            </ul>
        </div>
    )
}

export default NavBar;