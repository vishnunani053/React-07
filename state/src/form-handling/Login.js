 //with mutiple handlers
 
 /*
 import React from "react";

 class Login extends React.Component{
 state={
     email:"",
     password:""
 }
 updateEmailHandler=(event)=>{
     // console.log(event);
      //console.log(event.target);
      //console.log(event.target.value);
     this.setState({email:event.target.value})
 }
 updatePasswordHandler=(event)=>{
     this.setState({password:event.target.value})
 }
 submitHandler=(event)=>{
     console.log(this.state);
     event.preventDefault()
  }
   render(){
         return <div>
         <pre>{JSON.stringify(this.state)}</pre>
         <form onSubmit={this.submitHandler}>
             <label>Email:</label>
             <input type="text"  onChange={this.updateEmailHandler}/><br/><br/>
             <label>Password:</label>
             <input type="text" onChange={this.updatePasswordHandler}/><br/><br/>
             <input type="submit" value="Login"/>
         </form>

         </div>
     }
 }
 export default Login
 
 // with sigle handler

*/

 
 import React from "react";

 class Login extends React.Component{
 state={
     email:"",
     password:""
 }
 updateHandler=(event)=>{
    this.setState({[event.target.name]:event.target.value})
 }
 submitHandler=(event)=>{
     console.log(this.state);
     event.preventDefault()
  }
   render(){
         return <div>
         <pre>{JSON.stringify(this.state)}</pre>
         <form onSubmit={this.submitHandler}>
             <label>Email:</label>
             <input type="text"  onChange={this.updateHandler}  name="email"/><br/><br/>
             <label>Password:</label>
             <input type="text" onChange={this.updateHandler} name="password"/><br/><br/>
             <input type="submit" value="Login"/>
         </form>

         </div>
     }
 }
 export default Login
