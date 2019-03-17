import React from 'react'

// my useInput custom hook
import { useInput } from './hooks/useInput'
import axios from './axios'

export default function Login() {

    const { value:email, setValue:setEmail, bind:bindEmail, reset:resetEmail } = useInput('')
    const { value:password, setValue:setPassword, bind:bindPassword, reset:resetPassword } = useInput('')

    const handleSubmit = async e => {
        e.preventDefault()

        if (!email || !password) {
            resetEmail()
            resetPassword()
            return
        }

        const { data } = await axios.post('/login', { email, password })
        if (data.success) {
            window.location.replace('/')
        }
    }

    return (
        <div className = "login-container">
            <h1>Login</h1>
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
