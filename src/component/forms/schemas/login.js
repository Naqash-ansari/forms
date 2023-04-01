import * as Yup from 'yup';

export const LoginSchema =Yup.object({
    email:Yup.string().email().required('Please Enter Your email'),
    password:Yup.string().min(7).max(15).required('Please Enter Your password'),
})