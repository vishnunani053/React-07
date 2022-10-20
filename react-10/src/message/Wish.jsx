import React from "react";
class Wish extends React.Component{
    state={
        message:"wish"
    }
    updatHandler=(value)=>{
        this.setState({message:value})
    }
    render(){
        return <div>
        <h1>Wish message: {this.state.message}</h1>
<button className="btn btn-primary" onClick={this.updatHandler.bind(this,"good morning")}>GM</button>&nbsp;&nbsp;&nbsp;
<button className="btn btn-success" onClick={this.updatHandler.bind(this,"good afternoon")}>GN</button>
        </div>
    }
}
export default Wish