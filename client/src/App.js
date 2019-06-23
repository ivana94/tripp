import React from 'react';
import './App.css';

import Info from './info';
import Prices from './prices';
import Dashboard from './dashboard';
import Worksheet from './worksheet';
import Nav from './nav';
import Profile from './profile/profile';

import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';

import { useToggle } from './hooks/useToggle';

export default function App() {

    const { editorIsVisible:navIsVisible, toggle:toggleNav } = useToggle();

    return (
        <div className="App">
            <header className="App-header">
                <img src = '/icons/hamburger-menu.svg' onClick = { toggleNav } alt = 'hamburger icon that, when clicked, will toggle a side menu to appear' />
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
                    <Nav navIsVisible = { navIsVisible } />
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
                        <Route path = "/profile" component = { Profile } />
                        <Route path = "/dashboard" component = { Dashboard } />

                        <Redirect path="*" to="/" />
                    </Switch>
                </div>
            </BrowserRouter>
        </div>
    );

}
