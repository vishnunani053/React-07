import React from 'react'

const UserDetails = (props) => {
  return (
    <div className="container">
    <h2>User Details</h2>
    {/*   <h3>{JSON.stringify(props)}</h3> */}
    <div className="row">
        <div className="col">
            <div className="card">
                <div className="card-header">
                    <img src={props.selectedUser.image} alt="" />
                </div>
                <div className="card-body">
                    <ul className="list-group">
                        <li className="list-group-item">Age:{props.selectedUser.age}</li>
                        <li className="list-group-item">Blood group:{props.selectedUser.bloodGroup}</li>
                        <li className="list-group-item">DOB:{props.selectedUser.birthDate}</li>
                        <li className="list-group-item">Gender:{props.selectedUser.gender}</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>

</div>
  )
}

export default UserDetails