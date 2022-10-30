/*import React from "react";
import {Link} from "react-router-dom"
class Navbar extends React.Component {
    render() {
        return <div>
           <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <Link class="navbar-brand" to="#">Reacat Routing</Link>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item">
        <Link className="nav-link" to="industry">Industry</Link>
      </li>
      <li class="nav-item">
        <Link className="nav-link" to="services">Services</Link>
      </li>
     
    </ul>
  </div>
</nav>
        </div>
    }
}
export default Navbar*/



import React from "react";
import {Link} from "react-router-dom"
class Navbar extends React.Component {
    render() {
        return <div>
           <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <Link class="navbar-brand" to="#">Reacat Routing</Link>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item">
        <Link className="nav-link" to="industry">Industry</Link>
      </li>
      <li class="nav-item">
        <Link className="nav-link" to="services">Services</Link>
      </li>
     
    </ul>
  </div>
</nav>
        </div>
    }
}
export default Navbar