import React from 'react';

export default function Header({ toggleNav }) {
    return (
        <header className="App-header">
                <img 
                    className = 'hamburger-icon' 
                    src = '/icons/hamburger-menu.svg' 
                    onClick = { toggleNav } 
                    alt = 'hamburger icon that, when clicked, will toggle a side menu to appear' 
                />
                <div className = "header-image-container">
                    <img className = "App-header-image" src = '/jp.jpg' alt = 'busy street in Tokyo'/>
                </div>
                <h1 className = "App-header-text">日本 !</h1>

        </header>
    );
};