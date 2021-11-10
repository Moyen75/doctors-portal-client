import { Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import FacebookSharpIcon from '@mui/icons-material/FacebookSharp';
import GoogleIcon from '@mui/icons-material/Google';
import TwitterIcon from '@mui/icons-material/Twitter';
import bg from '../../../images/footer-bg.png'

const footerBg={
    backgroundImage:`url(${bg})`
}

const Footer = () => {
    return (
        <Box style={footerBg}>
            <Container sx={{mt:6,textAlign:'left',color:'gray'}}>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={3} md={3}>
                        <Box sx={{ mt: 8 }}>
                            <Typography >Emergency Dental Care</Typography>
                            <Typography sx={{py:1}}>Check up</Typography>
                            <Typography sx={{py:1}}>Treatment or personal Diseases</Typography>
                            <Typography sx={{py:1}}>Tooth Extraction</Typography>
                            <Typography sx={{py:1}}>Check up</Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={3} md={3}>
                        <Typography variant='h5' sx={{ color: '#77F5EA' }}>
                            services
                        </Typography>
                        <Box sx={{ mt: 4 }}>
                            <Typography sx={{py:1}}>Emergency Dental Care</Typography>
                            <Typography sx={{py:1}}>Check up</Typography>
                            <Typography sx={{py:1}}>Treatment or personal Diseases</Typography>
                            <Typography sx={{py:1}}>Tooth Extraction</Typography>
                            <Typography sx={{py:1}}>Check up</Typography>
                            <Typography sx={{py:1}}>Check up</Typography>
                            <Typography sx={{py:1}}>Check up</Typography>
                            <Typography sx={{py:1}}>Check up</Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={3} md={3}>
                        <Typography variant='h5' sx={{ color: '#77F5EA' }}>
                            Oral Health
                        </Typography>
                        <Box sx={{ mt: 4 }}>
                            <Typography sx={{py:1}}>Emergency Dental Care</Typography>
                            <Typography sx={{py:1}}>Check up</Typography>
                            <Typography sx={{py:1}}>Treatment or personal Diseases</Typography>
                            <Typography sx={{py:1}}>Tooth Extraction</Typography>
                            <Typography sx={{py:1}}>Check up</Typography>
                            <Typography sx={{py:1}}>Check up</Typography>
                            <Typography sx={{py:1}}>Check up</Typography>
                            <Typography sx={{py:1}}>Check up</Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={3} md={3}>
                        <Typography variant='h5' sx={{ color: '#77F5EA' }}>
                            Our Address
                        </Typography>
                        <Box sx={{ mt: 4 }}>
                            <Typography sx={{py:1}}>New town Bogura.</Typography>
                            <Typography sx={{py:1}}>Bangladesh</Typography>
                            <br />
                            <FacebookSharpIcon sx={{borderRadius:'50%',fontSize:45, color:'#68F7EB'}}/>
                            <GoogleIcon sx={{color:'#68F7EB',border:'1px solid #68F7EB',borderRadius:'50%',p:1}}/>
                            <TwitterIcon sx={{color:'#68F7EB',border:'1px solid #68F7EB',borderRadius:'50%',p:1,mx:1}}/>
                            <br />
                            <br />
                            <br />
                            <br />
                            <Typography sx={{py:1}}>Call</Typography>
                            <Typography sx={{py:1,backgroundColor:'#68F7EB',color:'white',width:'40%',borderRadius:1,px:1}}>+12132133</Typography>
                        </Box>
                    </Grid>
                    
                </Grid>
            </Container>
            <Typography sx={{pt:10,pb:4}}>
                &copy;2021,all rights reserved
            </Typography>
        </Box>
    );
};

export default Footer;