import React from 'react'
import {Routes, Route} from "react-router-dom"
import Homepage from './homepage/Homepage'

function Pages() {
  return (
    <Routes>
        <Route path='/' element={<Homepage/>}/>

    </Routes>
  )
}

export default Pages
