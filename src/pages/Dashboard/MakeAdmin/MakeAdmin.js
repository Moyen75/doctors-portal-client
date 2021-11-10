import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import useAuth from '../../../hooks/useAuth'

const MakeAdmin = () => {
    const [email, setEmail] = useState('')
    const { idToken } = useAuth()
    const handleEmail = e => {
        setEmail(e.target.value)
    }
    const handleAdmin = e => {
        const emails = { email }
        fetch('http://localhost:5000/users/admin', {
            method: 'PUT',
            headers: {
                'authorization': `Bearer ${idToken}`,
                'content-type': 'application/json'
            },
            body: JSON.stringify(emails)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })

        e.preventDefault()
    }
    return (
        <div>
            <h1>Make admin</h1>
            <form onSubmit={handleAdmin}>
                <TextField
                    id="standard-email-input"
                    label="Email"
                    onBlur={handleEmail}
                    type="email"
                    variant="standard"
                />
                <Button type="submit" variant='contained'>Make Admin</Button>
            </form>
        </div>
    );
};

export default MakeAdmin;