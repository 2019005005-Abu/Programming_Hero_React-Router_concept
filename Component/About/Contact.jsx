import React from 'react'
import { Outlet } from 'react-router-dom'

const Contact = () => {
  return (
    <div>
      <h1>Contact Page</h1>
      <Outlet></Outlet>
    </div>
  )
}

export default Contact
