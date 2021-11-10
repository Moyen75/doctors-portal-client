import { Alert, Button, CircularProgress, Container, Grid, Typography } from '@mui/material';
import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import { Box } from '@mui/system';
import { useHistory, useLocation } from 'react-router';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import bg from '../../../images/login.png'

const Login = () => {
    const location = useLocation()
    const history = useHistory()
    const { login, isLoading,googleSignIn } = useAuth()
    const [loginData, setLoginData] = useState({})

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData }
        newLoginData[field] = value;
        setLoginData(newLoginData)
        console.log(loginData)
    }
    const handleLogin = e => {
        login(loginData.email, loginData.password, location, history)
        e.preventDefault()
    }

    const handleGoogleSignIn=()=>{
        googleSignIn(location,history)
    }


    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Box>
                        <Typography variant="h4">
                            login
                        </Typography>
                        <form onSubmit={handleLogin}>
                            <TextField
                                id="standard-basic"
                                label="E-mail"
                                name="email"
                                type='email'
                                onChange={handleOnChange}
                                sx={{ width: '100%' }}
                                variant="standard" />

                            <TextField
                                sx={{ width: '100%' }} id="standard-basic"
                                name="password"
                                onChange={handleOnChange}
                                type='password'
                                label="Password"
                                variant="standard" />

                            <Button type='submit' variant='contained' sx={{ backgroundColor: '#2CE9CD', mt: 1, width: '100%' }}>Sign in</Button>
                            
                            <NavLink style={{ textDecoration: 'none' }} to='/register'><Button type='submit' variant='text' sx={{ mt: 1, width: '100%' }}>New User? Please Register</Button></NavLink>
                             <Button onClick={handleGoogleSignIn} variant='contained'>Google sign in</Button>
                            <br />
                            {
                                isLoading && <CircularProgress />
                            }

                        </form>
                    </Box>
                </Grid>
                <Grid item xs={12} md={6}>
                    <img style={{ width: '480px' }} src={bg} alt="" />
                </Grid>
            </Grid>
        </Container>
    );
};

export default Login;