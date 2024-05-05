import React from 'react'
import {Routes, Route} from "react-router-dom"
import Homepage from './homepage/Homepage'
import PatientRegister from './register/PatientRegister'


function Pages() {
  return (
    <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/patient_register' element={<PatientRegister/>}/>

    </Routes>
  )
}

export default Pages
