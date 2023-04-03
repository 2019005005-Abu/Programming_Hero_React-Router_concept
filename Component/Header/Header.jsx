import React from 'react'
import { Link } from 'react-router-dom'
import ActiveLinks from '../ActiveLinks/ActiveLinks'
const Header = () => {
  const styling={
    color:"red",
    backgroundColor:"black",
    padding:'10px 20px'
  }
  return (
    <div style={{
        display:"flex",
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"center",
        gap:"10px",
        padding:"10px 20px",
        backgroundColor:"yellow",
        color:"black",
    }}>
       <ActiveLinks to='/'>Home</ActiveLinks>
       <ActiveLinks to='/about'>About</ActiveLinks>
       <ActiveLinks to='/contact'>Contact</ActiveLinks>
       <ActiveLinks to="/friends">Friends</ActiveLinks>
       <ActiveLinks to="/post">Post</ActiveLinks>
    </div>
  )
}

export default Header
