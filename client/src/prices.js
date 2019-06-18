import React from 'react';
import './prices.css';
import { useAxios } from './hooks/useAxios';
import { useToggle } from './hooks/useToggle';
import PriceEditor from './price-editor';

export default function Prices() {

    const prices = useAxios('/prices');
    const { editorIsVisible, toggle } = useToggle();

    if (!prices.length) return <div className = 'loading'></div>;

        return (
            <div className = "price-container">

                { !!prices.length && prices.map(p => {
                return (
                    <div key = { p.id } className = { p.is_expense ? "expense-desc price-card" : 'activity-desc price-card' }>
                        <div className = 'price-left'>
                            <p>{ p.item }</p>
                            <p>{ p.city }</p>
                        </div>
                        <div className = 'price-right'>
                            <p className = 'price-item'>${ p.price }</p>
                        </div>
                    </div>
                )
            })}

            <p className = 'total-cost'>total cost: ${ !!prices.length && prices.reduce((a,b) => a + b.price, 0) }</p>

            <p className = "toggle" onClick = { toggle }>+ add new item here</p>

            { editorIsVisible && <PriceEditor /> }

        </div>
    )

};
