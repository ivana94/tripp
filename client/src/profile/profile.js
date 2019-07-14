import React from 'react';
import './profile.css';
import Price from '../price';

export default function Profile({ first, color, prices }) {
    return (
        <div className = "profile-container">
            <h1>Welcome, { first } </h1>
            <p>your color is <span style={{'fontWeight': 'bolder', color: color} }>tomato</span></p>
            <h1 className = 'activities-header'>Activities</h1>
            <hr></hr>
            <p><strong>activities</strong> are things you want to do!</p>
            { prices && prices.map(p =>  p.is_activity ? <Price p = { p } className = { 'profile-price-card' } /> : '' )}

            <h1 className = 'expenses-header'>Expenses</h1>
            <hr></hr>
            <p>*<strong>expenses</strong> are things you must pay for</p>
            { prices && prices.map(p =>  p.is_expense ? <Price p = { p } className = { 'profile-price-card' } /> : '' )}

            <h3>all together everything will cost:</h3>
            <p className = 'total-cost'>${ !!prices.length && prices.reduce((a,b) => a + b.price, 0) }</p>
        </div>
    );
};