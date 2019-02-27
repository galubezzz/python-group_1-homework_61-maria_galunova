import React, {Component} from 'react';
import {NavLink} from 'react-router-dom'

class Menu extends Component {
    render() {
        return (
            <nav className="nav justify-content-end">
                <NavLink className="nav-link" to="/">Home</NavLink>
                <NavLink className="nav-link" to="/aboutus">About Us</NavLink>
                <NavLink className="nav-link" to="/contacts">Contacts</NavLink>
            </nav>
        );
    }
}

export default Menu;