import React from 'react'
import { useLoaderData } from 'react-router-dom'
import Friend from './Friend'

const French = () => {
   
    const friends=useLoaderData()
    console.log(friends)
  return (
    <div>
      <h1>My friends{friends.length}</h1>
      {
      friends.map((friend)=><Friend friend={friend} key={friend.id}/>)
      }
    </div>
  )
}

export default French
