import React from 'react';
//import {Link} from 'react-router-dom';
import {NavLink} from 'react-router-dom'


function Menu() {
    return (
        <div>
            <nav>
                <NavLink exact activeClassName="active" to="/home">Home</NavLink>
                <NavLink exact activeClassName="active" to="/about">About</NavLink>
                <NavLink exact to="/contact">Contact</NavLink>
            </nav>
        </div>
    )
}

export default Menu
