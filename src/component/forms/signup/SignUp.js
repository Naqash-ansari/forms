import { useFormik } from 'formik'
import React from 'react'
import { SignUpSchema } from '../schemas';
import { Button, FormControl, Grid, MenuItem, Select, TextField } from '@mui/material';
import { Box } from '@mui/system';
import fromLogo from '../img/form.jpg'
import { useTheme } from 'styled-components';


const SignUp = () => {
    let Style = useTheme();
    let GridFrist  =Style.firstGrid;
    const { values, errors, touched, handleBlur, handleSubmit, handleChange } = useFormik({
        initialValues: {
            fname: '',
            lname: '',
            contact: '',
            email: '',
            country: "",
            password: '',
            confirm_password: ''
        },
        validationSchema: SignUpSchema,
        onSubmit: (values, action) => {
            console.log(values);
        }
    })

    // let errorsLName = errors.lname 

    // console.log(errors);

    const currencies = [
        {
            id: 1,
            value: 'pakistan',
            code: '+92',
        },
        {
            id: 2,
            value: 'india',
            code: '+91',
        },
        {
            id: 3,
            value: 'UK',
            code: '+911',
        },
        {
            id: 4,
            value: 'dubai',
            code: '+922',
        },
        {
            id: 5,
            value: 'Counter',
            code: '+00',
        },
    ];


    return (
        <Grid container height={{ xs: '90vh', sm: '100vh' }} sx={GridFrist} >
            <Grid item xs={12} sm={3.2} padding={{ xs: '1rem', sm: '0.7rem' }} sx={{ border: '1px solid silver' }}>

                <Box>
                    <img src={fromLogo} height='50vh' alt='form logo' />
                </Box>

                <form autoComplete='off' onSubmit={handleSubmit} >


                    <TextField
                        id={errors.fname && touched.fname ? "hh" : ""}
                        sx={{ width: '100%', mt: '0.6rem' }}
                        label={errors.fname && touched.fname ? errors.fname : "First Name"}
                        type="text"
                        name='fname'
                        value={values.fname}
                        onChange={handleChange}
                        onBlur={handleBlur}

                    />

                    <TextField
                        id={errors.lname && touched.lname ? "hh" : ""}
                        sx={{ width: '100%', mt: '0.6rem' }}
                        label={errors.lname && touched.lname ? errors.lname : "Last Name"}
                        type="text"
                        name='lname'
                        value={values.lname}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />

                    <TextField
                        sx={{ width: '100%', mt: '0.6rem' }}
                        id={errors.contact && touched.contact ? "hh" : ""}
                        label={errors.contact && touched.contact ? errors.contact : "Contact"}
                        type="number"
                        name='contact'
                        value={values.contact}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />

                    <TextField
                        sx={{ width: '100%', mt: '0.6rem' }}
                        id={errors.email && touched.email ? "hh" : ""}
                        label={errors.email && touched.email ? errors.email : "Email"}
                        type="text"
                        name='email'
                        value={values.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />

                    <FormControl
                        id={errors.country && touched.country ? "hh" : ""}
                        sx={{ width: '100%', display: 'flex', mt: '0.6rem', textAlign: 'start' }}>
                        <Select
                            name='country'
                            value={values.country}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            displayEmpty
                            inputProps={{ 'aria-label': 'Without label' }}
                        >
                            <MenuItem value="">
                                <em>Country</em>
                            </MenuItem>
                            {
                                currencies.map(({ id, value }) => {
                                    return (
                                        <MenuItem key={id} value={value}>{value}</MenuItem>
                                    )
                                })
                            }
                        </Select>
                    </FormControl>

                    <TextField
                        sx={{ width: '100%', mt: '0.6rem' }}
                        id={errors.password && touched.password ? "hh" : ""}
                        label={errors.password && touched.password ? errors.password : "Password"}
                        type="text"
                        name='password'
                        value={values.password}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                    <TextField
                        sx={{ width: '100%', mt: '0.6rem' }}
                        id={errors.confirm_password && touched.confirm_password ? "hh" : ""}
                        label={errors.confirm_password && touched.confirm_password ? errors.confirm_password : "Current Password"}
                        type="text"
                        name='confirm_password'
                        value={values.confirm_password}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />

                    {/* <button type='submit' >Submit</button> */}

                    <Button type='submit' variant="outlined" color='secondary' 
                    sx={{ mt: '0.6rem', width: '100%', padding: '0.6rem' }} >
                        Submit
                    </Button>

                </form>
            </Grid>
        </Grid>
    )
}

export default SignUp
