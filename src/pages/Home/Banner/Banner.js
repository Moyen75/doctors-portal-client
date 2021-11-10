import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Button, Container, Typography } from '@mui/material';
import chair from '../../../images/chair.png'
import bg from '../../../images/bg.png'

const bannerBg = {
    background: `url(${bg})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat'
}
const verticallyCenter = {
    display: 'flex',
    alignItems: 'center',
    height: '500px'
}


const Banner = () => {
    return (
        <Container sx={{ flexGrow: 1, mt: '10px' }}>
            <Grid container spacing={2} style={bannerBg}>
                <Grid item xs={12} md={6} style={verticallyCenter} sx={{ textAlign: 'left' }}>
                    <Box>
                        <Typography variant='h3'>
                            Your new smile <br />
                            Starts here.
                        </Typography>
                        <Typography>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium aliquam tempora corporis magnam ratione. Facilis laborum molestias nemo saepe suscipit!
                        </Typography>
                        <Button variant="contained" sx={{ backgroundColor: '#68EAF0' }}>Get appointment</Button>
                    </Box>
                </Grid>
                <Grid item xs={12} md={6} style={verticallyCenter}>
                    <img src={chair} style={{ maxWidth: '450px' }} alt="" />
                </Grid>
            </Grid>
        </Container>
    );
};

export default Banner;