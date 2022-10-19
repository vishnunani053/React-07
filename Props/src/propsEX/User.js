import React,{Component} from "react"
import Employee from "./Employee"
class User extends Component{
    uid=101
    uname="rahul"
    uloc=["banglore","hyderabad"]
    udetails={email:"rahul@gmail",mobile:484648449}
render(){
    return <div>
<Employee id={this.uid} name={this.uname} loc={this.uloc} details={this.udetails}/>
    </div>
}
}
export default User