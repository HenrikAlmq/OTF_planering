import React, { useState } from 'react';
import { unstable_renderSubtreeIntoContainer } from 'react-dom/cjs/react-dom.production.min';
import { Link } from "react-router-dom";
import Articles from './Articles';



function Navbar({user}) {
    
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
                <h2 className='h2nav'>Välkommen, {user.value}</h2>
            </div>
        </nav>
    )
}

export default Navbar;