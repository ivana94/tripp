import React, { useState, useEffect } from 'react'
import './prices.css';
import { useAxios } from './hooks/useAxios'


export default function Prices() {

    const prices = useAxios('/prices')

    if (!prices.length) return <div className = 'loading'></div>

        return (
            <div className = "price-container">

                { !!prices && prices.map(p => {
                return (
                    <div key = { p.id } className = 'price-card'>
                        <p>{ p.expense ? p.expense : p.activity }</p>
                        <p>{ p.city }</p>
                        <p>${ p.price }</p>
                    </div>
                )
            })}

            </div>
        )

}
