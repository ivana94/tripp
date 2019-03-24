import React, { useState, useEffect } from 'react';
import axios from './../axios';

// useAxios sets state
export const useAxios = url => {

    const [value, setValue] = useState([]);

    // getData makes ajax request and updates state
    const getData = async () => {
        const { data } = await axios.get(url)
        setValue(data)
    }

    useEffect(() => {
        getData()
    // empty array tells useEffect to run only on mount and unmount
    }, [])

    return value

};
