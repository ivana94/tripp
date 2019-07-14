import React from 'react';

export default function Price({ p, className }) {
    return (
        <div key = { p.id } className = { p.is_expense ? `expense-desc ${className}` : `activity-desc ${className}` }>
            <div className = 'price-left'>
                <p>{ p.item }</p>
                <p>{ p.city }</p>
            </div>
            <div className = 'price-right'>
                <p className = 'price-item'>${ p.price }</p>
            </div>
        </div>
    );
};