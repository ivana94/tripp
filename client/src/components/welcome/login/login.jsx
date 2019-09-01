import React, { useState } from 'react';
import { useInput } from '../../../hooks/useInput';
import axios from '../../../utils/axios';
import './login.css';

export default function Login() {

    const { value:email, bind:bindEmail, clear:clearEmail } = useInput('');
    const { value:password, bind:bindPassword, clear:clearPassword } = useInput('');

    const [error, setError] = useState('');

    const handleSubmit = async e => {
        e.preventDefault();

        if (!email || !password) return setError(
            `please enter your
            ${!email ? 'email' : ''}
            ${ !email && !password ? 'and' : '' }
            ${!password ? 'password' : ''}`
        )

        const { data } = await axios.post('/login', { email, password });
        if (data.success) window.location.replace('/');
        else {
            clearEmail();
            clearPassword();
            setError(data.error);
        }
    }

    return (
        <div className = "login-container">
            <h1>Login</h1>
            { error && <div className = 'error'>{ error }</div> }
            <form onSubmit = { handleSubmit }>
                <input
                    name = "email"
                    type = "text"
                    placeholder = "email"
                    { ...bindEmail }
                />
                <input
                    name = "password"
                    type = "password"
                    placeholder = "password"
                    { ...bindPassword }
                />
            <button>login</button>
            </form>
        </div>
    )
}
