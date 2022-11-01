import React, { useState, useEffect } from 'react'
import Axios from "axios"
import UserList from './UserList'
import UserDetails from './UserDetails'

const UserApp = () => {
  let [Users, setUsers] = useState({})
  let [selectedUser, setselectedUser] = useState({})

  useEffect(() => {
    Axios.get("https://dummyjson.com/users").then((response) => {
      setUsers(response.data)

    }).catch(() => { })
  }, [])
  let selectedUserHandler = (user) => {
    setselectedUser(user)
  }
  return (
    <div className='container mt-5'>
      <div className='row'>
        <h2>User App</h2>
        <pre>{JSON.stringify(Users)}</pre>
        <div className='col-md-8'>

          {
            Object.keys(Users).length > 0 ? <> <UserList users={Users.users} selectedUser={selectedUserHandler} />
            </> : null
          }

        </div>
        <div className='col-md-4'>
          {
            Object.keys(selectedUser).length > 0 ? <>
              <UserDetails selectedUser={selectedUser}/></> : null
          }

        </div>
      </div>

    </div>
  )
}

export default UserApp
