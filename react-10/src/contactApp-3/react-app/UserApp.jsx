import React, { useEffect, useState } from 'react'
import UserList from "./UserList"
import Axios from "axios"
import UserDetails from './UserDetails'


const UserApp = () => {
  let[users,setUsers]=useState({})
  let[selectedUser,setselectedUser]=useState({})
  useEffect(()=>{
Axios.get("https://dummyjson.com/users").then((response)=>{
setUsers(response.data)
}).catch((err)=>{

})
  },[])
  let selectedUserHandler=(users)=>{
setselectedUser(users)
  }
  return (
    <div className='container'>
    <h1>User App</h1>
        <pre>{JSON.stringify(users)}</pre>
      <div className='row'>
        <div className='col-md-8'>
        {
         Object.keys(users).length>0?<>
 <UserList users={users.users} selectedUser={selectedUserHandler}/>
         </>:null
        }
       
        </div>
        <div className='col-md-4'>
          {
            Object.keys(selectedUser).length>0?<>
            <UserDetails users={users.users} selectedUser={selectedUser}/></>:null
          }
        
        </div>
       
      </div>

    </div>
  )
}

export default UserApp