import React, { useEffect } from 'react'
import '../style/otp.css'
import { Box, Button, Grid } from '@mui/material';
import { useTheme } from 'styled-components';
import fromLogo from '../img/form.jpg'

const Otp = () => {
    let Style = useTheme();
    let GridFrist = Style.firstGrid;

    useEffect(() => {
        OTPInput();
    }, [])

    function OTPInput() {
        const inputs = document.querySelectorAll('.otp-form > *[class]');

        for (let i = 0; i < inputs.length; i++) {
            inputs[i].addEventListener('keydown', function (event) {
                if (event.keyCode === 8) {
                    inputs[i].value = '';
                    if (i !== 0)
                        inputs[i - 1].focus();
                    event.preventDefault();
                }
                else {
                    if (i === inputs.length - 1 && inputs[i].value !== '') {
                        return true;
                    } else if (event.keyCode > 47 && event.keyCode < 58) {
                        // 47 to 58 donetes 0 to 9 digit in keyborad
                        inputs[i].value = event.key
                        if (i !== inputs.length - 1)
                            inputs[i + 1].focus();
                        event.preventDefault();
                    }
                    else if (event.keyCode > 64 && event.keyCode < 91) {
                        // 6 to 91 denotes a to z 
                        event.preventDefault()
                    }
                }
            })
        }
    }



    return (

        <Grid container height={{ xs: '90vh', sm: '96vh' }} sx={GridFrist} >
            <Grid item xs={12} sm={3.2} padding={{ xs: '1rem', sm: '0.7rem' }} sx={{ border: '1px solid silver' }}>

                <Box>
                    <img src={fromLogo} height='180vh' alt='form logo' />
                </Box>

                <Box className='otp-form' sx={{mt:'4rem'}}>
                    <input type='text' maxLength='1' className="otp-input" />
                    <input type='text' maxLength='1' className="otp-input" />
                    <input type='text' maxLength='1' className="otp-input" />
                    <input type='text' maxLength='1' className="otp-input" />
                </Box>

                <Button type='submit' variant="outlined"
                    sx={{ mt: '2rem', width: '100%', padding: '0.6rem', border: '1px solid silver', color: 'silver' }} >
                    Submit
                </Button>
            </Grid>
        </Grid>
    )
}

export default Otp