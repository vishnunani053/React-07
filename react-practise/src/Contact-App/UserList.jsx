import React from 'react'

const UserList = (props) => {
   let selectedUserHandler=(users)=>{
console.log(users);
props.selectedUser(users)
   }
  return (
    <div className='container'>
        <h1>UserList</h1>
        <pre>{JSON.stringify(props.users)}</pre>
        <div className='row'>
        <div className='col'>
            <table className='table table-hover'>
                <thead className='bg-primary text-white'>
                <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Email</th>
                </tr> 
                </thead>
                <tbody>
                    {
                     props.users.map((users)=>{
                        return <tr key={users.id} onMouseOver={selectedUserHandler.bind(this,users)}>
                              <td>{users.id}</td>
                              <td>{users.firstName}</td>
                              <td>{users.email}</td>
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