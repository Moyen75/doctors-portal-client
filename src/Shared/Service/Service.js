import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';
import CardMedia from '@mui/material/CardMedia';


const Service = (props) => {
    const { name, description, img } = props.service;
    return (
        <Grid item xs={4} sm={4} md={4}>
            <Card sx={{ minWidth: 275,border:0, boxShadow: 0 ,mt:'100px' }}>
                <CardMedia
                    component="img"
                    sx={{ width: "100px", margin: '0 auto' }}
                    image={img}
                    alt="green iguana"
                />
                <CardContent>
                    <Typography sx={{ fontWeight: '400' }} variant={'h3'} gutterBottom>
                        {name}
                    </Typography>
                    <Typography variant="body2">
                        {description}
                    </Typography>
                </CardContent>
            </Card>
        </Grid>

    );
};

export default Service;