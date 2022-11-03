import React from 'react'

const UserList = (props) => {
    let selectedUserHandler = (users) => {
        props.selectedUser(users)
        console.log(users);
    }
    return (
        <div className='container'>
            <div className='row'>
            <pre>{JSON.stringify(props)}</pre>
                <div className='col'>
                    <table className='table table-hover'>
                        <thead className='bg-dark text-white'>
                            <tr>
                                <th>Id</th>
                                <th>Name</th>
                                <th>Email</th>
                            </tr>
                        </thead>
                        <tbody>

                            {
                                props.users.map((users) => {
                                    return <tr key={users.id} onMouseOver={selectedUserHandler.bind(this, users)}>
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
