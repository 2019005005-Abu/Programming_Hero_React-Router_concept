import React from 'react'
import { useLoaderData } from 'react-router-dom'

const FriendDetails = () => {
  const friend=useLoaderData();
  console.log(friend)
  
  return (
    <div>
      <h1>Everything about this person is here</h1>
      <h4>Name:{friend.name}</h4>
      <p>Phone:{friend.phone}</p>
      <p>Email:{friend.email}</p>
    </div>
  )
}

export default FriendDetails
