import { useState } from 'react'

export const useInput = initialVal => {
    const [ value, setValue ] = useState(initialVal)

    return {
        value,
        setValue,
        // reset can be invoked to clear input fields
        reset: () => setValue(''),
        // will be used input fields, to set value attr and onChange event handler
        bind: {
            value,
            onChange: e => setValue(e.target.value)
        }
    }
}
