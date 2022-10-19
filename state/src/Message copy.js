 import React from "react"
 class Message extends React.Component{
     message="hello"
     gmHandler=()=>{
 console.log("click is working");
 this.message="good morning"
 console.log(this.message)
 this.forceUpdate()
     }
     gnHandler=()=>{
         console.log("click is working");
         this.message="good night"
         console.log(this.message)
         this.forceUpdate()
     }
  render(){
     return <div>
         <h1>Message;{this.message}</h1>
         <button onClick={this.gmHandler}> GM</button>&nbsp;&nbsp;
         <button onClick={this.gnHandler}> GN</button>
     </div>
  }
 }
 export default Message
