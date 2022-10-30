// import React from "react";
// class NewClock extends React.Component{
//     constructor(props){
// super(props)
// this.state={
//     ct:new Date().toLocaleTimeString()
// }
//     }
//     componentDidMount(){
//         setInterval(()=>{
//             this.setState({ct:new Date().toLocaleTimeString()})
//         },[1000]);

//     }
//     render(){
//         return <div>
// <h1>Time:{this.state.ct}</h1>
//         </div>
//     }
// }
// export default NewClock



import React from "react";
class NewClock extends React.Component{
    constructor(props){
        super(props)
        this.state={
            time:new Date().toLocaleTimeString()
        }

    }
    componentDidMount(){
        this.setState({ct:new Date().toLocaleTimeString()})
    }
    render(){
        return <div>
        <h1>Time:{this.state.time}</h1>

        </div>
    }
}
export default NewClock