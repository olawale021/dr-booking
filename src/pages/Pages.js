import React from 'react'
import {Routes, Route} from "react-router-dom"
import Homepage from './homepage/Homepage'
import PatientRegister from './register/Register'
import PatientLogin from './login/Login'


function Pages() {
  return (
    <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/patient_register' element={<PatientRegister/>}/>
        <Route path='/patient_login' element={<PatientLogin/>}/>


    </Routes>
  )
}

export default Pages
