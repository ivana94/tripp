import React from 'react';
import './nav.css';

import { Link } from 'react-router-dom';

export default function Nav({ navIsVisible, stopBubbling }) {
    return (
        <nav 
            className = {`${ navIsVisible ? "on" : "off" } nav-container`}
            onClick = { e =>  e.target.pathname ? null : stopBubbling(e) }
        >
            <ul>
                <li>
                    <Link to = '/profile'>profile</Link>
                </li>
                <li>
                    <Link to = '/dashboard'>dashboard</Link>
                </li>
                <li>
                    <Link to = '/itinerary'>itinerary generator</Link>
                </li>
            </ul>
        </nav>
    );
};