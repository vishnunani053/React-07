import React from "react";
class Message extends React.Component{
    //message="hello"
  state={
     message:"hello"
  }
    gmHandler=()=>{
this.setState({message:" hello good morning"})
    }
    gnHandler=()=>{
this.setState({message:"hello good night"})
    }
    render(){
        return <div>
            <h1>wish mesaage:{this.state.message}</h1>
            <button onClick={this.gmHandler}>GM</button>&nbsp;&nbsp;&nbsp;
            <button onClick={this.gnHandler}>GN</button>
        </div>
    }

}
export default Message