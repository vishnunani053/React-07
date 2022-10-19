import React from "react"
let CompC=(props)=>{
    return <div>
    <hr/>
        <h4>componentC</h4>
        <pre>{JSON.stringify(props)}</pre>
        <h2>employee loc={props.loc[0]}</h2>
        <h1>employe details={props.details.email}</h1>
        
    </div>
}
export default CompC