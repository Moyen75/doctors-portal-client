import { Alert, Container, Grid, Typography } from '@mui/material';
import React, { useState } from 'react';
import Booking from '../Booking/Booking';

const booking=[
    {
        id:1,
        name:'Teeth Orthodontics',
        time:'10.00 AM - 11.00 AM',
        spaces:10
    },
    {
        id:1,
        name:'Teeth Orthodontics',
        time:'11.00 AM - 12.00 PM',
        spaces:10
    },
    {
        id:1,
        name:'Teeth Orthodontics',
        time:'4.00 PM - 5.00 PM',
        spaces:10
    },
    {
        id:4,
        name:'Teeth Orthodontics',
        time:'8.00 PM - 9.00 PM',
        spaces:19
    },
    {
        id:5,
        name:'Teeth Orthodontics',
        time:'1.00 PM - 2.00 PM',
        spaces:40
    },
    {
        id:6,
        name:'Teeth Orthodontics',
        time:'7.00 PM - 8.00 PM',
        spaces:15
    }
]


const AvailableAppointments = ({date}) => {
    const [bookingSuccess,setBookingSuccess]=useState(false)
    return (
        <Container>
            <Typography variant='h4' sx={{fontWeight:500,color:'#60EAED',mb:5}}>Available appointments {date.toDateString()}</Typography>
            {bookingSuccess && <Alert severity="success" >
                            Appointment added successfully!
                        </Alert>
                        }
            <Grid container spacing={2}>
                {
                    booking.map(book=><Booking
                    key={book.id}
                    book={book}
                    date={date}
                    setBookingSuccess={setBookingSuccess}
                    ></Booking>)
                }
            </Grid>
        </Container>
    );
};

export default AvailableAppointments;