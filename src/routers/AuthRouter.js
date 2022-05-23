import React from 'react'
import {Route,Routes} from 'react-router-dom'
import { LoginScreen } from '../components/auth/LoginScreen';
import { RegisterScreen } from '../components/auth/RegisterScreen';

export const AuthRouter = () => {

   


  return (
    <div>
    <Routes>
        <Route path="/login" element={<LoginScreen/>}></Route>
        <Route path ="/register" element={<RegisterScreen/>}></Route>
        <Route path ="*" element={<LoginScreen/>}/>
    </Routes>
    </div>
  )
}
