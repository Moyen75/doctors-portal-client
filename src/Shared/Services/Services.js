import React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container, Typography } from '@mui/material';
import logo1 from '../../../src/images/cavity.png'
import logo2 from '../../../src/images/fluoride.png'
import logo3 from '../../../src/images/whitening.png'
import Service from '../Service/Service';


const services = [
    {
        name: 'cavity',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia eius officiis reprehenderit soluta tenetur repellat nemo earum assumenda, dolor illum.',
        img: `${logo1}`
    },
    {
        name: 'Fluoride',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia eius officiis reprehenderit soluta tenetur repellat nemo earum assumenda, dolor illum.',
        img: `${logo2}`
    },
    {
        name: 'Whitening',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia eius officiis reprehenderit soluta tenetur repellat nemo earum assumenda, dolor illum.',
        img: `${logo3}`
    }
]



const Services = () => {
    return (
        <Container>
            <Box sx={{ flexGrow: 1 }}>
                <Typography variant="h6" sx={{ color: '#2BF0AD',py:5 }}>
                    Our services
                </Typography>
                <Typography variant="h3" >
                    Services we provided.
                </Typography>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 12, md: 12 }}>
                    {
                        services?.map(service => <Service
                            key={service.name}
                            service={service}
                        />)
                    }

                </Grid>
            </Box>
        </Container>
    );
};

export default Services;