import { Component } from "react";

class Emp extends Component{
   
    render(){
        return <div>
<pre>{JSON.stringify(this.props)}</pre>
<hr/>
<h2>eid={this.props.eid}</h2>
<h2>ename={this.props.ename}</h2>
<h2>esal={this.props.esal}</h2>
<h2>eloc={this.props.eloc[1]}</h2>
<h2>edet={this.props.edet.email}</h2>
        </div>
    }
} 
export default Emp