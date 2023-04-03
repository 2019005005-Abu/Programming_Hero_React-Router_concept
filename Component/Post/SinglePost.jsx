import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import "../../Component/Post/POst.css"
const SinglePost = ({post}) => {

  const ButtonStyle= {textDecoration:"none",
  backgroundColor:"red",
  padding:"5px 10px",
  color:"black",
  borderRadius:"5px",
  fontWeight:"bolder",
  margin:"10px"
}
const navigate=useNavigate();
const hadleNavigation=()=>{
 navigate(`/post/${post.id}`)
}

  return (
    <div className='post'>
      <h1>Id:{post.id}</h1>
      <h5>Title:{post.title}</h5>
      <p>Description:{post.body}</p>
      <Link to={`/post/${post.id}`} 
      style={ButtonStyle}>Details</Link>
      <Link to={`/post/${post.id}`}>
      <button style={{marginLeft:"10px"}}>
       Show Details</button></Link>
      <button style={ButtonStyle} 
      onClick={hadleNavigation}>
      With Button Handler
      </button>
    </div>
  )
}

export default SinglePost
