import React from 'react';
import Grid from '@mui/material/Grid';
import { Button, Container, Typography } from '@mui/material';
import exeptional from '../../../images/treatment.png'
import { Box } from '@mui/system';


const Exeptional = () => {
    return (
        <Container sx={{ flexGrow: 1, mt: '60px' }}>
            <Grid container spacing={1}>
                <Grid item xs={12} md={6}>
                    <img src={exeptional} style={{ width: '70%', height: '400px' }} alt="" />
                </Grid>
                <Grid item xs={12} md={6} sx={{ display: 'flex', textAlign: 'left' }}>
                    <Box>
                        <Typography variant='h3'>
                            Exceptional Dental 
                            Care,On your term
                        </Typography>
                        <Typography>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis qui, perspiciatis laborum provident rerum voluptates dolorum consequatur expedita neque. Quam, ipsum officia illo maxime veniam nesciunt! Eveniet sunt dignissimos doloribus, tenetur molestias rerum. Alias aspernatur perspiciatis numquam. Earum, soluta voluptate.
                        </Typography>
                        <Button variant='contained' sx={{ backgroundColor: '#2BF0AD' }}>Learn more</Button>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Exeptional;