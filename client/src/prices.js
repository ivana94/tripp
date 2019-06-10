import React, { useState, useEffect } from 'react'
import './prices.css';
import { useAxios } from './hooks/useAxios'


export default function Prices() {

    const prices = useAxios('/prices')

    if (!prices.length) return <div className = 'loading'></div>

        return (
            <div className = "price-container">

                { !!prices.length && prices.map(p => {
                return (
                    <div key = { p.id } className = { p.expense ? "expense-desc price-card" : 'activity-desc price-card' }>
                        <div className = 'price-left'>
                            <p>{ p.expense ? p.expense : p.activity }</p>
                            <p>{ p.city }</p>
                        </div>
                        <div className = 'price-right'>
                            <p className = 'price-item'>${ p.price }</p>
                        </div>
                    </div>
                )
            })}

            <p className = 'total-cost'>{ !!prices.length && prices.reduce((a,b) => a + b.price, 0) }</p>

            </div>
        )

}
