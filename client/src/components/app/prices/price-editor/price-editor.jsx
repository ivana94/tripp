import React from 'react';
import { useInput } from '../../../../hooks/useInput';
import axios from '../../../../utils/axios';

export default function PriceEditor() {

    const { value:activity, bind:bindActivity } = useInput('');
    const { value:price, bind:bindPrice } = useInput('');
    const { value:city, bind:bindCity } = useInput('');

    async function handleSubmit() {
        await axios.post('/price', { activity, price, city });
    }

    return (
        <div>
            <form onSubmit = { e => {
                    e.preventDefault();
                    handleSubmit(e);
                } }>
                <input name = "item" placeholder = "activity name" { ...bindActivity } />
                <input name = "price" placeholder = "estimated cost" { ...bindPrice } />
                <input name = "city" placeholder = "city (within Japan)" { ...bindCity } />
                <button>add</button>
            </form>
        </div>
    )
};
