let CompB=(props)=>{
    return <div>
    <pre>{JSON.stringify(props)}</pre>
<h2>empid:{props.eid}</h2>
<h2>empname:{props.ename}</h2>
<h2>empsal:{props.esal}</h2>
<h2>emploc:{props.eloc[1]}</h2>
<h2>empdet:{props.edetails.email}</h2>
<hr/>
    </div>
}
export default CompB