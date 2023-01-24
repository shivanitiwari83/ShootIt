import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'

const User = () => {
  return (
    <div className='base'>
      <Header/>
      <Outlet />
    </div>
  )
}

export default User