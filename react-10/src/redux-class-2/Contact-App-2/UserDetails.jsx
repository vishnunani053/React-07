import React from 'react'

const UserDetails = (props) => {
  return (
    <div className='container'>
    <div className='row'>
        <div className='col'>
            <div className='card'>
            <div className='card-header'>
            <img src={props.selectedUser.image} alt="" />
            </div>
            <div className='card-body'>
            <ul className='list-group'>
                <li className='list-group-item'>{props.selectedUser.age}</li>
                <li className='list-group-item'>{props.selectedUser.bloodGroup}</li>
                <li className='list-group-item'>{props.selectedUser.gender}</li>
            </ul>

            </div>

            </div>
        </div>
    </div>
        
    </div>
  )
}

export default UserDetails