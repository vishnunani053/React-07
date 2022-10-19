import { Component } from "react";
import Emp from "./Emp"

class User extends Component{
    id=101
    name="sonia"
    salary=45000
    location=["usa","canada"]
    details={email:"priyanka@gmail.com",mobile:99654871244}
    render(){
        return <div>
<Emp eid={this.id} ename={this.name} esal={this.salary} eloc={this.location} edet={this.details}/>
        </div>
    }
}
export default User