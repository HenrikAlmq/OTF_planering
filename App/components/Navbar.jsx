import React, { useState } from 'react';
import { unstable_renderSubtreeIntoContainer } from 'react-dom/cjs/react-dom.production.min';
import { Link } from "react-router-dom";
import {useContext, createContext } from 'react';
import { UserContext } from '../index'



function Navbar({user}) {
    const userName = useContext(UserContext);
    console.log(userName)
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
                    <li>
                        <Link to="/inbound">Inleverans</Link>
                    </li>
                    <li>
                        <Link to="/Stock">Lager</Link>
                    </li>
                </ul>
                <h2 className='h2nav'>Välkommen, {userName}</h2>
            </div>
        </nav>
    )
}

export default Navbar;