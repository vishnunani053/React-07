//import New  from "./New"
//import Employee from "./table/Employee"
import Navbar from "./Navbar/Navabar"
import {BrowserRouter as Router,Switch,Route} from "react-router-dom"
import Industry from "./Routing/Industry"
import Services from "./Routing/Services"
//import Wish from "./message/Wish"
function App(){
  return <div>
    {/* <New/> */}
    <Router>
      <Navbar/>
      <Switch>
        <Route path="/services" component={Services}/>
        <Route path="/industry">
          <Industry/>
        </Route>
      </Switch>
    </Router>
    {/* <Wish/> */}
    {/* <Employee/> */}
  </div>
}
export default App
