import React from 'react';

export default function PriceEditor() {
    return (
        <div>
            <form>
                <input name = "item" placeholder = "activity name" />
                <input name = "price" placeholder = "estimated cost" />
                <input name = "city" placeholder = "city (within Japan)" />
                <button>add</button>
            </form>
        </div>
    )
};
