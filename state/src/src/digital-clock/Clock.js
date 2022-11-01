import React from "react";
class Clock extends React.Component{
    constructor(props){
        super(props)
        console.log("good morning");
    }
    componentDidMount(){
        console.log("hello");
    }
    render (){
        console.log("render method");
        return <div>

        </div>
    }
}
export default Clock