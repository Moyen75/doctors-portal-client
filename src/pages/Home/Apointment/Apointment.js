import { Button, Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import logo from '../../../images/doctor.png'
import bg from '../../../images/appointment-bg.png'

const backgroundStyle = {
    backgroundImage: `url(${bg})`,
    backgroundColor: 'rgba(46, 59, 62 , 0.8)',
    backgroundBlendMode: 'darken, luminosity',
}


const Apointment = () => {
    return (

        <Container sx={{ flexGrow: 1, mt: '200px' }}  style={backgroundStyle}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <img src={logo} style={{ maxWidth: '450px', marginTop: '-120px' }} alt="" />
                </Grid>
                <Grid item xs={12} md={6} sx={{ textAlign: 'left', alignItems: 'center', display: 'flex' }}>
                    <Box>
                        <Typography variant='h6' sx={{ color: '#68EAF0' }}>
                            Appointment
                        </Typography>
                        <Typography variant='h3'>
                            Make an appointment today.
                        </Typography>
                        <Typography sx={{ color: 'gray' }}>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, iure ut quaerat in cupiditate corrupti unde expedita sint libero voluptatibus.
                        </Typography>
                        <Button variant="contained" sx={{ backgroundColor: '#68EAF0' }}>Learn more</Button></Box>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Apointment;