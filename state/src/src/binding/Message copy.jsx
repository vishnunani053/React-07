import React from "react";

class Message extends React.Component{
    state={
        msg:"hello"
    }
    gmHandler=()=>{
        this.setState({
            msg:"good morning"
        })
    }
    gaHandler=()=>{
        this.setState({
            msg:"good afternoon"
        })
    }
    geHandler=()=>{
        this.setState({
            msg:"good evening"
        })
    }
    gnHandler=()=>{
        this.setState({
            msg:"good night"
        })
    }
    render(){
        return <div>
        <h1>wish Message:{this.state.msg}</h1>
        <button onClick={this.gmHandler}>GM</button>
        <button onClick={this.gaHandler}>GA</button>
        <button onClick={this.geHandler}>GE</button>
        <button onClick={this.gnHandler}>GN</button>
        </div>
    }
}
export default Message