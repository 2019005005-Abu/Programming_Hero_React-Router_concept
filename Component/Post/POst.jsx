import React from 'react'
import { Outlet, useLoaderData } from 'react-router-dom'
import SinglePost from './SinglePost';
import "../../Component/Post/POst.css"
const POst = () => {
    const posts=useLoaderData();
    console.log(posts);
  return (
    <div>
      <p>There are {posts.length} Posts Here </p>
      <div className='poststyle'>
      {
        posts.map(function(post){
        return <SinglePost post={post}/>
        })
       }
      </div>
       
      <Outlet></Outlet>
    </div>
  )
}

export default POst
