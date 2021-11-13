import React, { useState } from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import useAuth from '../../../hooks/useAuth';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const BookingModal = ({ bookingOpen, handleClose, book, date, setBookingSuccess }) => {
  const { name, time } = book;
  const { user } = useAuth()
  const userInfo = { name: user.displayName, email: user.email, phoneNumber: '' }
  const [bookingInfo, setBookingInfo] = useState(userInfo)

  const handleInfo = e => {
    const field = e.target.name;
    const value = e.target.value;
    const newBookingInfo = { ...bookingInfo }
    newBookingInfo[field] = value;
    setBookingInfo(newBookingInfo)
  }

  const handleAppointment = e => {
    // set data
    const appointment = {
      ...bookingInfo,
      time,
      serviceName: name,
      date: date.toLocaleDateString()
    }
    fetch('https://sheltered-crag-86495.herokuapp.com/appointments', {
      method: "POST",
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(appointment)
    })
      .then(res => res.json())
      .then(data => {
        if (data.insertedId) {
          setBookingSuccess(true)
          handleClose()
        }
      })
    e.preventDefault()
  }
  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={bookingOpen}
      onClose={handleClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={bookingOpen}>
        <Box sx={style}>
          <Typography id="transition-modal-title" variant="h6" component="h2">
            {name}
          </Typography>
          <form onSubmit={handleAppointment}>
            <TextField
              disabled
              id="outlined-basic"
              label="Time"
              sx={{ width: '90%', m: 1 }}
              defaultValue={time}
              variant="outlined" />
            <TextField
              id="outlined-basic"
              label='Name'
              name='name'
              defaultValue={user.displayName}
              onBlur={handleInfo}
              sx={{ width: '90%', m: 1 }}
              variant="outlined" />
            <TextField
              id="outlined-basic"
              label="Phone number"
              name='phoneNumber'
              onBlur={handleInfo}
              sx={{ width: '90%', m: 1 }}
              variant="outlined" />
            <TextField
              id="outlined-basic"
              label='email'
              defaultValue={user.email}
              name='email'
              onBlur={handleInfo}
              sx={{ width: '90%', m: 1 }}
              variant="outlined" />
            <TextField
              disabled
              id="outlined-basic"
              label="Date"
              sx={{ width: '90%', m: 1 }}
              defaultValue={date.toDateString()}
              variant="outlined" />
            <Button type='submit' variant='contained'>Book now</Button>
          </form>
        </Box>
      </Fade>
    </Modal>
  );
};

export default BookingModal;