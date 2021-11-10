import { Alert, Button, CircularProgress, Container, Grid, Typography } from '@mui/material';
import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import login from '../../../images/login.png'
import { Box } from '@mui/system';
import { NavLink, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Registation = () => {
    const [loginData, setLoginData] = useState({})
    const { createUser, isLoading, error, user, googleSignIn } = useAuth()
    const history = useHistory()
    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData }
        newLoginData[field] = value;
        console.log(newLoginData)
        setLoginData(newLoginData)
    }
    const handleLogin = e => {
        e.preventDefault()
        if (loginData.password !== loginData.password2) {
            alert('password didnot matched')
            return;
        }
        createUser(loginData.email, loginData.password, loginData.username, history)

    }



    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Box>
                        <Typography variant="h4">
                            Register
                        </Typography>
                        {!isLoading && <form onSubmit={handleLogin}>
                            <TextField
                                id="standard-basic"
                                label="Name"
                                type='text'
                                name="username"
                                onBlur={handleOnBlur}
                                sx={{ width: '100%' }}
                                variant="standard" />
                            <TextField
                                id="standard-basic"
                                label="E-mail"
                                type='email'
                                name="email"
                                onBlur={handleOnBlur}
                                sx={{ width: '100%' }}
                                variant="standard" />

                            <TextField
                                sx={{ width: '100%' }} id="standard-basic"
                                name="password"
                                onBlur={handleOnBlur}
                                type='password'
                                label="Password"
                                variant="standard" />

                            <TextField
                                sx={{ width: '100%' }} id="standard-basic"
                                name="password2"
                                onBlur={handleOnBlur}
                                type='password'
                                label="Confirm Password"
                                variant="standard" />

                            <Button type='submit' variant='contained' sx={{ backgroundColor: '#2CE9CD', mt: 1, width: '100%' }}>Register</Button>

                            <NavLink style={{ textDecoration: 'none' }} to='/login'><Button type='submit' variant='text' sx={{ mt: 1, width: '100%' }}>Already Registered? Please Login</Button></NavLink>

                        </form>}
                        {
                            isLoading && <CircularProgress />
                        }
                        {user?.email && <Alert severity="success" >
                            This is a success message!
                        </Alert>
                        }
                        <br />
                        {
                            error && <Alert severity="error">{error} </Alert>
                        }
                    </Box>

                </Grid>
                <Grid item xs={12} md={6}>
                    <img style={{ width: '480px' }} src={login} alt="" />
                </Grid>
            </Grid>
        </Container>
    );
};

export default Registation;