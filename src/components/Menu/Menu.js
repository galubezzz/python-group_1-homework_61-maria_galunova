import React, {Component} from 'react';
import {NavLink} from 'react-router-dom'

class Menu extends Component {
    render() {
        return (
            <div>
                <NavLink to="/aboutus">About US</NavLink>
            </div>
        );
    }
}

export default Menu;