// import React from "react"
// class Counter extends React.Component{
//     constructor(props){
//         super(props)
//         console.log("constructor");
//     }
//     render(){
//         console.log("render method")
//         return <div>
// <h1>counter compo</h1>
//         </div>
//     }
// }
// export default Counter



import React from "react";
 class Counter extends React.Component{
    constructor(props){
        super(props)
        console.log("constructor");
    }
    render(){
        console.log("render");
        return <div>
<h1>counter</h1>
        </div>
    }
 }
 export default Counter