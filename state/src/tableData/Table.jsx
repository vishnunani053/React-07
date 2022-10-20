import employees from "./data";
import React from "react";
class Table extends React.Component{
    render(){
        return <div className="container mt-4">
<div className="row ">
<div className="col-md-8">
<table className="table table-hover">
    <thead className="bg-dark text-white">
        <th>Id</th>
        <th>Name</th>
        <th>Mobile</th>
        <th>Email</th>
        <th>Gender</th>
    </thead>
    <tbody>
        {
            employees.map((employee)=>{
                return <tr>
                    <td>{employee.id}</td>
                    <td>{employee.name}</td>
                    <td>{employee.mobile}</td>
                    <td>{employee.email}</td>
                    <td>{employee.gender}</td>
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
export default Table