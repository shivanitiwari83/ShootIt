import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../main/Header'
import Footer from './Footer'

const Admin = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}

export default Admin