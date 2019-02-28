import React, {Component} from 'react';
import {NavLink} from 'react-router-dom'

class Footer extends Component {
    render() {
        return (
            <nav className="navbar fixed-bottom navbar-light bg-light">
                <span>© <small>Если подумать, то у нас нет абсолютно никаких прав и защищать нам нечего. Отчаяние и безысходность - собственность разработчика.</small></span>
            </nav>
        );
    }
}

export default Footer;