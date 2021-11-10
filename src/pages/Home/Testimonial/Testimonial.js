import React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Container, Typography } from '@mui/material';
import test1 from '../../../images/people-1.png'
import test2 from '../../../images/people-2.png'
import test3 from '../../../images/people-3.png'

const tests = [
    {
        id: 1,
        describe: ' Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum est alias incidunt ipsa necessitatibus explicabo? Velit quia est consequatur fugiat.',
        img: `${test1}`,
        name: 'williamson',
        address: 'california'
    },
    {
        id: 2,
        describe: ' Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum est alias incidunt ipsa necessitatibus explicabo? Velit quia est consequatur fugiat.',
        img: `${test2}`,
        name: 'williamson',
        address: 'california'
    },
    {
        id: 3,
        describe: ' Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum est alias incidunt ipsa necessitatibus explicabo? Velit quia est consequatur fugiat.',
        img: `${test3}`,
        name: 'williamson',
        address: 'california'
    }
]

const Testimonial = () => {
    return (
        <Container sx={{ flexGrow: 1, textAlign: 'left' }}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <Typography variant='h6' sx={{ color: '#2BF0AD' }}>
                        TESTIMONIAL
                    </Typography>
                    <Typography variant='h3' sx={{ py: 3 }}>
                        What's our patient
                        <br />
                        says
                    </Typography>
                </Grid>
                <Grid item xs={12} md={6}>
                </Grid>
            </Grid>
            <Grid container spacing={{xs:2,md:3}} >
                {
                    tests.map(test => <Grid item xs={12} sm={4} >
                        <Paper elevation={3} sx={{p:2,textAlign:'justify'}}>
                            <Typography>
                                {test.describe}
                            </Typography>
                            <Grid container spacing={2} sx={{ mt: 3 }}>
                                <Grid xs={4} md={4}>
                                    <img src={test.img} style={{paddingLeft:'4px',marginLeft:20}} alt="" />
                                </Grid>
                                <Grid xs={8} md={8}>
                                    <Typography sx={{color:'#4BEBDE'}}>
                                        {test.name}
                                    </Typography>
                                    <Typography>
                                        {test.address}
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Paper>
                    </Grid>)
                }
            </Grid>
        </Container>
    );
};

export default Testimonial;