import React from "react"
class Message extends React.Component{
    state={message:"Hello"}
    gmHandler=()=>{
this.state.message="Good morning"
this.forceUpdate()
    }
    gnHandler=()=>{
this.state.message="Good night"
this.forceUpdate()
    }
    render(){
        return <div>
         <nav className="navbar navbar-dark bg-dark">
        <a className="nav-link">Message Component</a>
        </nav>
        <div className="container mt-5">
        <div className="row">
        <div className="col-md-6">
        <h1>Message:{this.state.message}</h1><br/>
<button className="btn btn-primary" onClick={this.gmHandler} >GM</button>&nbsp;&nbsp;&nbsp;
<button className="btn btn-info" onClick={this.gnHandler} >GN</button>
         </div>
        </div>
        </div>
        </div>
    }
}
export default Message