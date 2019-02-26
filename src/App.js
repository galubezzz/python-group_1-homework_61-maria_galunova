import React, {Component} from 'react';
import './App.css';
import {Route, Switch, BrowserRouter} from 'react-router-dom';
import Home from "./containers/Home/Home";
import AboutUs from "./containers/AboutUs/AboutUs"
import Contacts from "./containers/Contacts/Contacts"

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route path="/aboutus" component={AboutUs}/>
                    <Route path="/contacts" component={Contacts}/>
                    <Route path="/" exact component={Home}/>
                </Switch>
            </BrowserRouter>
        );
    }
}

export default App;
