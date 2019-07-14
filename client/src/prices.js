import React from 'react';
import './prices.css';
import { useToggle } from './hooks/useToggle';
import PriceEditor from './price-editor';
import Price from './price';

export default function Prices({ prices }) {

    const { editorIsVisible, toggle } = useToggle();

    if (!prices.length) return <div className = 'loading'></div>;

        return (
            <div className = "price-container">

                { !!prices.length && prices.map(p =>  <Price p = { p } className = { "price-card" } /> ) }

            <p className = 'total-cost'>total cost: ${ !!prices.length && prices.reduce((a,b) => a + b.price, 0) }</p>

            <p className = "toggle" onClick = { toggle }>+ add new item here</p>

            { editorIsVisible && <PriceEditor /> }

        </div>
    )

};
