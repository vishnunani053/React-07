import CompB from "./CompB"
import CompC from "./CompC"
let CompA=()=>{
    let id=101
    let name="priyanka"
    let salary=45000
    let location=["banglore","hyderabad"]
    let details={email:"priyanka@gamil.com",mobile:8797944646}
return <div>
 {/* <CompB message={"good mornig"}/>  */}
  <CompB eid={id} ename={name}  esal={salary} eloc={location} edetails={details}/>
  <CompC edet={details}/>
</div>
}
export default CompA