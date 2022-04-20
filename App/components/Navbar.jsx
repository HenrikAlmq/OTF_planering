import React from 'react'
import { Link } from "react-router-dom";
import Articles from './Articles';


function Navbar({Logout}) {
    return (
        <nav className="navbar">
            <div className='container'>
                <ul className='nav'>
                    <li>
                        <Link to="/articles">Artiklar</Link>
                    </li>
                    <li>
                        <Link to="/deliveries">Orders</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;