import { Link, NavLink } from 'react-router-dom'

export default function Nav() {

    return (

        <header>
            <nav className="navbar">
                <img src="" alt="" />
                <ul className="nav-ul">
                   <li> <NavLink className="navLink" to="/">Home</NavLink> </li>
                    {/* NavLink has active class that we can use to style as opposed to the <Link></Link> */}
                   <li> <NavLink className="navLink" to="/about">About</NavLink> </li>
                   <li> <NavLink className="navLink" to="/stocks">Dashboard</NavLink> </li>
                    {/* Presents all stocks. When you click on one stock it will redirect page to fill that one stock ..  /stock:symbol */}
                </ul>
            </nav>
        </header>
    );
}

