import React, {Component} from 'react';
import {NavLink} from 'react-router-dom'

class Menu extends Component {
    render() {
        return (
            <div>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/aboutus">About US</NavLink>
                <NavLink to="/contacts">Contacts</NavLink>
            </div>
        );
    }
}

export default Menu;