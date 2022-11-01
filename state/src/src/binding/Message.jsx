import React from "react";

class Message extends React.Component{
    state={
        msg:"hello"
    }
    updateHandler=(value)=>{
        this.setState({
            msg:value
        })
    }
    render(){
        return <div>
        <h1>wish Message:{this.state.msg}</h1>
        <button className="btn btn-primary" onClick={this.updateHandler.bind(this,"good morning")}>GM</button>&nbsp;&nbsp;
        <button className="btn btn-success" onClick={this.updateHandler.bind(this,"good afternoon")}>GA</button>&nbsp;&nbsp;
        <button className="btn btn-info" onClick={this.updateHandler.bind(this,"good evening")}>GE</button>&nbsp;&nbsp;
        <button className="btn btn-danger" onClick={this.updateHandler.bind(this,"good night")}>GN</button>&nbsp;&nbsp;
        </div>
    }
}
export default Message