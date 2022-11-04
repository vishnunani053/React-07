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

    }).catch(() => {

    })
  }, [])
  let selectedUserHandler = (users) => {
    setselectedUser(users)
  }

  return (
    <div className='container'>
      <div className='row'>
        <h2>user app</h2>
        <pre>{JSON.stringify(users)}</pre>
        <div className='col-8'>
          {
            Object.keys(users).length > 0 ? <><UserList users={users.users} selectedUser={selectedUserHandler} />
            </> : null
          }

        </div>
        <div className='col-4'>
          {
            Object.keys(selectedUser).length > 0 ? <><UserDetails selectedUser={selectedUser} />
            </> : null
          }

        </div>
      </div>

    </div>
  )
}

export default UserApp
