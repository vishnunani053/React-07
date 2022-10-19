import CompB from "./CompB"
import CompC from "./CompC"
let CompA=()=>{
   let eid=101
    let ename="rahul"    
    let esalary=45000
    let eloc=["wayanad","banglore"]
    let edetails={email:"rahul@gmail,com",mobile:525649489498}
    return <div>
<h1>componentA</h1>
<hr/>
{/* {<CompB message={"good mrng"}/>} */}
<CompB id={eid} name={ename} sal={esalary} details={edetails}/>
<CompC  loc={eloc} details={edetails} />
    </div>
}
export default CompA