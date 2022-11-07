import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchUserAction } from "../redux/user/User.action"


const User = () => {
    let dispatch = useDispatch();
    let users = useSelector((state) => {
        return state
    })
    useEffect (() => {
        dispatch(fetchUserAction())
    }, [])
    return (
        <div>
            <h1>User Component</h1>
            <div className="container mt-5">
                <pre>{JSON.stringify(users)}</pre>
                <div className="row">
                    <div className="col-md-8">
                        <table className="table table-hover">
                            <thead className="bg-info text-white">
                                <tr>
                                    <th>Id</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    Object.keys(users).length > 0 ? <>
                                        {
                                              users.users.map((user) => {
                                                return <tr>
                                                    <td>{user.id}</td>
                                                    <td>{user.name}</td>
                                                    <td>{user.email}</td>
                                                </tr>
                                            })
                                        }
                                    </> : null
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default User 
