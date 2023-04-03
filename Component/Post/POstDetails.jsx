import React from 'react'
import "../../Component/Post/POst.css"
import { useLoaderData, useNavigate } from 'react-router-dom'
const POstDetails = () => {
    const post=useLoaderData();
    const goBack=useNavigate();
    const HandleGoBack=()=>{
      goBack(-1);
    }
  return (
    <div>
      <span style={{marginTop:"10px"}}>Please show of  Id-{post.id} Details</span>
       <h5>{post.title}</h5>
       <p>{post.body}</p>
       <button onClick={HandleGoBack}>Go back </button>
    </div>
  )
}

export default POstDetails
