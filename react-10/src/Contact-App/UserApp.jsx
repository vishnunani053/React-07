import React, { useState, useEffect } from 'react'
import Axios from "axios"
import UserList from './UserList'
import UserDetails from './UserDetails'

const UserApp = () => {
  let [users, setusers] = useState({})
  let [selectedUser, setselectedUser] = useState({})

  useEffect(() => {
    Axios.get("https://dummyjson.com/users").then((response) => {
      setusers(response.data)

    }).catch(() => { })
  }, [])
  let selectedUserHandler = (user) => {
    setselectedUser(user)
  }
  return (
    <div className='container mt-5'>
      <div className='row'>
        <h2>User App</h2>
        <pre>{JSON.stringify(users)}</pre>
        <div className='col-md-8'>

          {
            Object.keys(users).length > 0 ? <>
             <UserList users={users.users} selectedUser={selectedUserHandler} />
            </> : null
          }

        </div>
        <div className='col-md-4'>
          {
            Object.keys(selectedUser).length > 0 ? <>
              <UserDetails selectedUser={selectedUser}/>
              </> : null
          }

        </div>
      </div>

    </div>
  )
}

export default UserApp
