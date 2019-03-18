import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import axios from './axios';
import Info from './info'
import Prices from './prices'
import Dashboard from './dashboard'

export default class App extends Component {
    constructor() {
        super()
        this.state = {}
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <div className = "overlay"></div>
                    <img className = "App-header-image" src= '/jp.jpg'  alt="bustling street in some city in Japan"/>
                    <h1 className = "App-header-text">Japan O'Clock</h1>

                </header>

                <Info />
                <Prices />
                <Dashboard />

            </div>
        );
    }
}
