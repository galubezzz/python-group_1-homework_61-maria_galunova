import React, {Component} from 'react';
import {NavLink} from 'react-router-dom'

class Menu extends Component {
    render() {
        return (
            <nav className="navbar navbar-light bg-light navbar-expand-lg">
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink exact className="nav-link" to="/">Главная</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/aboutus">О нас</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/contacts">Контакты</NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default Menu;