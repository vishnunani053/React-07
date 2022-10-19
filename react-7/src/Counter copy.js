import React from 'react'

class Counter extends React.Component{
    state={message:"hello"}
    incHandler=()=>{
        this.setState({message:"Good morning"})
    }
    decHandler=()=>{
        this.setState({message:"Good night"})
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
<button className="btn btn-primary" onClick={this.incHandler} >GM</button>&nbsp;&nbsp;&nbsp;
<button className="btn btn-info" onClick={this.decHandler} >GN</button>
         </div>
        </div>
        </div>
        </div>
    }
}
export default Counter
