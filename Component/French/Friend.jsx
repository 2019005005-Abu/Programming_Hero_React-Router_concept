import React from 'react'
import { Link } from 'react-router-dom'

const Friend = ({friend}) => {
    const frienstyling={
        border:"1px solid red",
        margin:"0 auto",
        padding:"10px ",
        textAlign:"center",
        width:"300px",
        borderRadious:"30px",
        marginTop:"10px",
        
    }
    const {name,username,email,id}=friend
  return (
    <div style={frienstyling}>
      <h3>FullName{name}</h3>
      <p>userName:{username}</p>
      <p>Email:{email}</p>
      <p><Link to={`/friend/${id}`}> show Me Detals</Link></p>
    </div>
  )
}

export default Friend
