import { Visibility, VisibilityOff } from '@mui/icons-material';
import { Button, FormControl, FormGroup, Grid, IconButton, InputAdornment, InputLabel, OutlinedInput, Stack, TextField } from '@mui/material';
import { Box } from '@mui/system';
import { useFormik } from 'formik'
import React from 'react';
import { NavLink } from 'react-router-dom';
import fromLogo from '../img/form.jpg'
import { LoginSchema } from '../schemas/login';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useTheme } from 'styled-components';


const LoginForm = () => {
    let Style = useTheme();
    let GridFrist  =Style.firstGrid;
    const [showPassword, setShowPassword] = React.useState(false);
    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };


    let { values, errors, touched, handleSubmit, handleChange, handleBlur } = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        validationSchema: LoginSchema,
        onSubmit: (value) => {
            console.log(value);
        }
    })



    return (
        <Grid container height={{ xs: '90vh', sm: '100vh' }} sx={GridFrist} >
            <Grid item xs={12} sm={3.2} padding={{ xs: '1rem', sm: '0.7rem' }} sx={{ border: '1px solid silver' }}>

                <Box>
                    <img src={fromLogo} height='140vh' alt='form logo' />
                </Box>

                <form autoComplete='off' onSubmit={handleSubmit} >

                    <TextField
                        sx={{ width: '100%', mt: '1.3rem' }}
                        id={errors.email && touched.email ? "hh" : ""}
                        label={errors.email && touched.email ? <span style={{ color: 'red' }}>{errors.email}</span> : "Email"}
                        type="text"
                        name='email'
                        value={values.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />

                    {/* <TextField
                        sx={{ width: '100%', mt: '0.6rem' }}
                        id={errors.password && touched.password ? "hh" : ""}
                        label={errors.password && touched.password ? errors.password : "Password"}
                        type="text"
                        name='password'
                        value={values.password}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    /> */}

                    <FormControl sx={{ width: '100%', mt: '0.8rem' }}>
                        <InputLabel htmlFor="outlined-adornment-password">{errors.password && touched.password ? <span style={{ color: 'red' }}>{errors.password}</span> : "Password"}</InputLabel>
                        <OutlinedInput
                            id="outlined-adornment-password"
                            type={showPassword ? 'text' : 'password'}
                            label={errors.password && touched.password ? errors.password : "password"}
                            name='password'
                            value={values.password}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            variant="outlined"
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowPassword}
                                        onMouseDown={handleMouseDownPassword}
                                        edge="end"
                                    >
                                        {showPassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                            }
                        />
                    </FormControl>


                    <Button type='submit' variant="outlined" 
                        sx={{ mt: '1rem', width: '100%', padding: '0.6rem',border:'1px solid silver', color:'silver' }} >
                        Submit
                    </Button>

                    {/* <Typography color={theme.palette.primary.main} >hello</Typography> */}

                    <Stack direction='row' justifyContent='space-between' alignItems='center' sx={{ mt: '1rem' }} >
                        <Box>
                            <FormGroup>
                                {/* <FormControlLabel control={<Checkbox defaultChecked />} label="Label" /> */}
                                <NavLink to='/'>Already have an account?  </NavLink>
                            </FormGroup>
                        </Box>
                        <Box>
                                <NavLink to='/' style={{display:'flex', textAlign:'center', textDecoration:'none'}} ><ArrowForwardIcon /> Sign Up</NavLink>
                        </Box>
                    </Stack>
                </form>
            </Grid>
        </Grid>
    )
}

export default LoginForm