import React, { useState } from 'react'

// my useInput custom hook
import { useInput } from './hooks/useInput'
import axios from './axios'

export default function Login() {

    const { value:email, bind:bindEmail, reset:resetEmail } = useInput('');
    const { value:password, bind:bindPassword, reset:resetPassword } = useInput('');
    
    const [error, setError] = useState('');

    const handleSubmit = async e => {
        e.preventDefault();

        if (!email || !password) {
            resetEmail();
            resetPassword();
            return;
        }

        const { data } = await axios.post('/login', { email, password });
        if (data.success) {
            window.location.replace('/');
        } else {
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
