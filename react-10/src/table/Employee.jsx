import React from "react";
import employees from "./Data"
class Employee extends React.Component{

    render(){
        return <div className="container mt-5">
        <div className="row">
        <div className="col-md-8">
            <table className="table table-hover">
                <thead className="bg-dark text-white">
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                     {
                        employees.map((employee)=>{
                            return <tr>
                                <td>{employee.id}</td>
                                <td>{employee.name}</td>
                                <td>{employee.email}</td>
                            </tr>
                        })
                     }
                </tbody>
            </table>
        </div>

        </div>

        </div>
    }
}
export default Employee