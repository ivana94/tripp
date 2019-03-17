import React, { useState, useEffect } from 'react'
import './prices.css';
import axios from './axios'




// useAxios sets state
const useAxios = () => {

    const [prices, updatePrices] = useState([]);

    // getPrices makes ajax request and updates state
    const getPrices = async () => {
        let { data } = await axios.get('/prices')
        updatePrices(data)
    }

    useEffect(() => {
        getPrices()
    // empty array tells useEffect to run only on mount and unmount
    }, [])

    return prices

}


export default function Prices() {

    const prices = useAxios()

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
