import React from 'react';
import Container from '@mui/material/Container';
import { Button, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import bg from '../../../images/appointment-bg.png'

const contactBg = {
    backgroundImage: `url(${bg})`,
    backgroundPosition:'center',
    backgroundSize:'cover',
    backgroundColor: 'rgba(31, 31, 31,0.9)',
    backgroundBlendMode: 'darken, luminosity',
    marginTop:50,
    paddingTop:30,
    paddingBottom:150
}

const ContuctUs = () => {

    return (
        <Container style={contactBg}>
            <Typography variant='h5' sx={{ color: '#4BEBDE' }}>
                Contact us
            </Typography>
            <Typography variant='h3'sx={{color:'white'}}>
                Always connect with us
            </Typography>
            <Box>
                <form>
                    <TextField
                        id="outlined-basic"
                        label="E-mail*"
                        sx={{ width: '50%', my: 1,backgroundColor:'white',borderRadius:1 }}
                        variant="outlined" />
                    <br />
                    <TextField
                        id="outlined-basic"
                        label="Subject*"
                        sx={{ width: '50%', my: 1,backgroundColor:'white',borderRadius:1 }}
                        variant="outlined" />
                    <br />
                    <TextField
                        id="filled-multiline-static"
                        label="Your message*"
                        multiline
                        sx={{ width: '50%', my: 1,backgroundColor:'white',borderRadius:1 }}
                        rows={4}
                        variant="outlined"
                    />
                    <br />
                    <Button variant='contained' sx={{ backgroundColor: '#4BEBDE' }}>
                        submit
                    </Button>
                </form>
            </Box>
        </Container>
    );
};

export default ContuctUs;