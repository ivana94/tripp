import React from 'react';
import './App.css';
import Header from './header';
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
        <div 
            className = {`${ navIsVisible ? "darken-background" : "" } App`}
            onClick = { navIsVisible ? toggleNav : null }
        >
            
            <Header toggleNav = { toggleNav } />

            <BrowserRouter>
                <div>
                    <Nav 
                        navIsVisible = { navIsVisible } 
                        stopBubbling = { e => e.stopPropagation() }
                    />
                    <Switch>
                        <Route
                               exact path="/"
                               render={() => (
                                    <div>
                                        <Info />
                                        <Prices />
                                        <Dashboard />
                                        <section className = "section-header">
                                            <h1>Spring 2021. Let's go.</h1>
                                        </section>
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
