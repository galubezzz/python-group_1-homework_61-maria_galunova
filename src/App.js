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
                    <Route exact path="/" component={Home}/>
                    <Route path="/aboutus" component={AboutUs}/>
                    <Route path="/contacts" component={Contacts}/>
                </Switch>
            </BrowserRouter>
        );
    }
}

export default App;
