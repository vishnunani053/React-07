import React, { Component } from 'react'

export class login extends Component {
    state={
        email:"",
        password:""
    }
    updateEmailHandler=(event)=>{
        this.setState({email:event.target.value})
    }
    updatePasswordHandler=(event)=>{
        this.setState({password:event.target.value})
    }
    updateSubmitHandler=(event)=>{
        console.log(this.state);
event.preventDefault()
//invoking the back end api to login
    }
  render() {
    return (
      <div className='container mt-5'>
      <div className='row'>
      <div className='col-md-4'>
        <form className='form-group' onSubmit={this.updateSubmitHandler}>
        <pre>{JSON.stringify(this.state)}</pre>
            <input type="text" 
            className='form-control' 
            placeholder='Enter Email Id' 
            onChange={this.updateEmailHandler}/> <br/><br/>
            <input type="text"
             className='form-control' 
             placeholder='Enter Password'
              onChange={this.updatePasswordHandler}/><br/><br/>
            <button className='btn btn-primary'>Login</button>
        </form>
        </div>
        </div>
      </div>
    )
  }
}

export default login
