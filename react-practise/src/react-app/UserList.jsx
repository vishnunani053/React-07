import React from 'react'

const UserList = (props) => {
  let selectedUserHandler=(users)=>{
console.log(users);
props.selecteUser=(users)=>{

}
  }
  return (
    <div className='container'>
      <h1>User-List</h1>
      <pre>{JSON.stringify(props.users)}</pre>
      <div className='row'>
        <div className='col'>
<table className='table table-hover'>
  <thead className='bg-dark text-white'>
      <tr>
      <th>ID</th>
      <th>Name</th>
      <th>Email</th>
      </tr>
  </thead>
  <tbody>
  {
    props.users.map((user)=>{
      return <tr key={user.id} onMouseOver={selectedUserHandler.bind(this,user)}>
        <td>{user.id}</td>
        <td>{user.firstName}</td>
        <td>{user.email}</td>
      </tr>
    })
  }
  </tbody>
</table>
        </div>
      </div>

    </div>
  )
}

export default UserList