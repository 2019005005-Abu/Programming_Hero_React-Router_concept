import React from 'react'
import { NavLink } from 'react-router-dom'
import '../../Component/ActiveLinks/ActiveLinks.css'
const ActiveLinks = ({to,children}) => {
  return (
    <NavLink to={to} 
    className={({isActive})=>{
     isActive ?"active":""
    }}>
      {children}
    </NavLink>
  )
}

export default ActiveLinks
