import React from 'react'
import { useSelector } from 'react-redux'

const Table = () => {
 
 const user = useSelector(state=>state.item.value)  
   console.log('user',user)  
  return (
    <div>
         <h1>Profile Info</h1>
         <h1>FirstName:{user.FirstName}</h1>
         <h1>LastName:{user.LastName}</h1>
         <h1>Password:{user.Password}</h1>
         <h1>Email:{user.Email}</h1>
    </div>
  )
}

export default Table