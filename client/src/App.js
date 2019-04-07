import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import axios from './axios';
import Info from './info';
import Prices from './prices';
import Dashboard from './dashboard';
import Worksheet from './worksheet';

import {BrowserRouter, Route, Redirect, Switch} from 'react-router-dom';


export default class App extends Component {
    constructor() {
        super()
        this.state = {}
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <div className = "App-yellow-box"></div>
                    <div className = "App-red-box"></div>
                    <h1 className = "App-header-text">日本!!!</h1>

                </header>

                <Info />

            <BrowserRouter>
                <div>
                    <Switch>
                        <Route
                               exact path="/"
                               render={() => (
                                   <div>
                                       <Info />
                                       <Prices />
                                       <Dashboard />
                                   </div>
                               )}
                           />
                        <Route path = "/learn" component = {Worksheet} />
                        <Redirect path="*" to="/" />
                    </Switch>
                </div>
            </BrowserRouter>

            </div>
        );
    }
}
