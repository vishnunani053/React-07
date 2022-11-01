// import React, { Component } from 'react'

// export class Counter extends Component {
//     state={counter:1}
//     incHandler=()=>{
// this.setState({counter:this.state.counter +1})
//     }
//     decHandler=()=>{
// this.setState({counter:this.state.counter -1})
//     }
//   render() {
//     return <div>
//         <h1>counter value:{this.state.counter}</h1>
//         <button onClick={this.incHandler}>INC</button>
//         <button onClick={this.decHandler}>DEC</button>
//       </div>
    
//   }
// }

// export default Counter


import React from "react";
class Counter extends React.Component{
    state={counter:0}
    incHandler=()=>{
this.setState({counter:this.state.counter +1})
    }
    decHandler=()=>{
this.setState({counter:this.state.counter -1})
    }
    render(){
        return <div>
        <h1>count:{this.state.counter}</h1>
        <button onClick={this.incHandler}>INC</button>&nbsp;&nbsp;&nbsp;
        <button onClick={this.decHandler}>DEC</button>

        </div>
    }
}
export default Counter