import * as Yup from 'yup';

export const SignUpSchema =Yup.object({
    fname:Yup.string().min(5).max(25).required('Please Enter Your First Name'),
    lname:Yup.string().min(5).max(25).required('Please Enter Your Last Name'),
    contact:Yup.number().min(11).required('Please Enter Your Number'),
    email:Yup.string().email().required('Please Enter Your email'),
    country:Yup.string().min(5).max(25).required('Please Enter Your country'),
    password:Yup.string().min(7).max(15).required('Please Enter Your password'),
    confirm_password:Yup.string().required().oneOf([Yup.ref('password'), null], "Password Must Match"),
})