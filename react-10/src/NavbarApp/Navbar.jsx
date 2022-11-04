import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <div>
      <nav className='navbar navbar-dark bg-dark'>
        <Link to="/" className='navbar-brand'>React-User-Component</Link>
        <div className="ml-auto">
          <ul className="navbar-nav">
            <li className="nav-list"><Link to="/users" className="nav-link">Users</Link></li>
          </ul>
        </div>

      </nav>
    </div>
  )
}
export default Navbar
