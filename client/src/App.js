import React from 'react';
import './App.css';

import Info from './info';
import Prices from './prices';
import Dashboard from './dashboard';
import Worksheet from './worksheet';

import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';

export default function App() {

    return (
        <div className="App">
            <header className="App-header">
                <div className = "App-yellow-box"></div>
                <div className = "header-image-container">
                    <img className = "App-header-image" src = '/jp.jpg' alt = 'busy street in Tokyo'/>
                </div>
                <h1 className = "App-header-text">日本 !</h1>

            </header>

            <section className = "section-header">
                <h1>Spring 2021. Let's go.</h1>
            </section>

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
                        <Route path = "/learn" component = { Worksheet } />
                        <Redirect path="*" to="/" />
                    </Switch>
                </div>
            </BrowserRouter>

        </div>
    );

}
