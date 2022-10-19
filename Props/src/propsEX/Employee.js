import React, { Component } from "react";
class Employee extends Component{
    render(){
        return <div>
        <pre>{JSON.stringify(this.props)}</pre>
<h1> employee id:{this.props.id}</h1>
<h1> employee name:{this.props.name }</h1>
<h1> employee loc:{this.props.loc[1] }</h1>
<h1> employee det:{this.props.details.email }</h1>
        </div>
    }
}
export default Employee