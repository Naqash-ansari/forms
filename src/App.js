import React from 'react';
import SignUp from './component/forms/signup/SignUp';
import LoginForm from './component/forms/login/LoginForm'
import Otp from './component/forms/otp/Otp'


const App = () => {
  return (
    <>
       <SignUp />
       <LoginForm />
       <Otp />
    </>
  )
}

export default App