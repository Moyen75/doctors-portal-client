import { Button, Grid, Paper, Typography } from '@mui/material';
import React from 'react';
import BookingModal from '../BookingModal/BookingModal';

const Booking = ({ book, date, setBookingSuccess }) => {
    const { name, time, spaces } = book;
    const [bookingOpen, setBookingOpen] = React.useState(false);
    const handleBookingOpen = () => setBookingOpen(true);
    const handleClose = () => setBookingOpen(false);

    return (
        <>
            <Grid item xs={12} sm={6} md={4}>
                <Paper elevation={1} sx={{ py: 5 }}>
                    <Typography variant='h5' sx={{ fontWeight: 500, color: '#60EAED', py: 1 }}>
                        {name}
                    </Typography>
                    <Typography variant='h6' sx={{ py: 1 }}>
                        {time}
                    </Typography>
                    <Typography variant="caption" display="block" gutterBottom sx={{ py: 1 }}>
                        {spaces} SPACES AVAILABLE
                    </Typography>
                    <Button onClick={handleBookingOpen} variant='contained' sx={{ backgroundColor: '#60EAED' }}>Book now</Button>
                </Paper>
            </Grid>
            <BookingModal
                handleClose={handleClose}
                book={book}
                date={date}
                setBookingSuccess={setBookingSuccess}
                bookingOpen={bookingOpen}
            ></BookingModal>
        </>
    );
};

export default Booking;