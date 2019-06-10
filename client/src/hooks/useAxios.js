import { useState, useEffect } from 'react';
import axios from './../axios';

export const useAxios = url => {

    const [value, setValue] = useState([]);

    useEffect(() => {
        (async () => {
            const { data } = await axios.get(url)
            setValue(data)
        })();
    }, [])

    return value

};
