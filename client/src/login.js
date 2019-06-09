import React, { useState } from 'react'
import { useInput } from './hooks/useInput'
import axios from './axios'

export default function Login() {

    const { value:email, bind:bindEmail, reset:resetEmail } = useInput('');
    const { value:password, bind:bindPassword, reset:resetPassword } = useInput('');

    const [error, setError] = useState('');

    const handleSubmit = async e => {
        e.preventDefault();

        if (!email || !password) {
            // if (!email) resetEmail();
            // if (!password) resetPassword()
            setError(`please enter a valid ${!email ? 'email' : ''} ${ !email && !password ? 'and' : '' } ${!password ? 'password' : ''}`)
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
