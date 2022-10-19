
import React from "react"
class New extends React.Component{
    vishnu={
        id:101,
        name:"rahul",
        salary:45000

    }
    render(){
        return <div>
            <h1>Id:{this.vishnu.id}</h1>
            <h1>Id:{this.vishnu.name}</h1>            
            <h1>Id:{this.vishnu.salary}</h1> 
            {JSON.stringify(this.vishnu)}           

            
        </div>
    }
}
export default New