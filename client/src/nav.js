import React from 'react';
import './nav.css';

import { Link } from 'react-router-dom';

export default function Nav({ navIsVisible }) {
    return (
        <nav className = {`${ navIsVisible ? "on" : "off" } nav-container`}>
            <ul>
                <li>
                    <Link to = '/profile'>profile</Link>
                </li>
                <li>
                    <Link to = '/dashboard'>dashboard</Link>
                </li>
            </ul>
        </nav>
    );
};