import { useState } from 'react';

export const useInput = init => {
    // for storing user input in state
    const [ value, setValue ] = useState(init);

    // for form validation
    const [ blur, setBlur ] = useState(false)
    return {
        value,
        setValue,
        clear: () => setValue(''),
        blur,
        bind: {
            value,
            onChange: e => setValue(e.target.value),
            onBlur: _ => setBlur(true),
            className: (!value && blur) ? "input-error" : ''
        }
    };
};
