import React from 'react';
import { useAxios } from './hooks/useAxios';
import './dashboard.css'

export default function Dashboard() {
    const data = useAxios('/user');
    console.log("data", data);
    return (
        <div className = "dashboard-container">
            <h1>yoooo</h1>
        </div>
    )
}
