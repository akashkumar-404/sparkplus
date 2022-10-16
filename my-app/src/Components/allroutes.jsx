import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Addjobs } from './addjobs'
import EditBook from './edit'
import User from './User'

const Allroutes = () => {
  return (
    <Routes>
        <Route path='/' element={<User />} />
        <Route path='/edit/:id' element={<EditBook />} />
        <Route path='/adduser' element ={<Addjobs />} />
    </Routes>
  )
}

export default Allroutes