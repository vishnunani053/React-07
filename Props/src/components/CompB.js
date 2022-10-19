 let CompB=(props)=>{
 return <div>
     <h1>componentB</h1>
     <pre>{JSON.stringify(props)}</pre>
     <h2>employee Id:{props.id}</h2>
     <h2>employee Name:{props.name}</h2>
     <h2>employee Salary:{props.sal}</h2>
     <h2>employee details:{props.details.mobile}</h2>
 </div>
 }
 export default CompB
