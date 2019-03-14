import React, { Component } from 'react'
import axios from 'axios'

export default class Prices extends Component {
    constructor() {
        super()
        this.state = {}
    }

    async componentDidMount() {
        let { data } = await axios.get('/prices')
        this.setState({ prices: data })

    }

    render() {
        const { prices } = this.state
        if (!prices) return <div className = 'loading'></div>

        return (
            <div className = "price-table">
            { !!prices && prices.map(p => {
                return (
                    <div className = 'price-row'>
                        <p>{ p.expense ? p.expense : p.activity } { p.city } ${ p.price }</p>
                    </div>
                )
            })}
            </div>
        )
    }
}
