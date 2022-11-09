import React from 'react'
import { Link } from "react-router-dom"

const Navbar = () => {
    return (
        <div>
            <nav className='navbar navbar-dark bg-dark'>
                <Link to="/" className='navbar-brand'>React-App</Link>
                <div>
                <ul className='navbar-nav'>
                    <li className='nav-list'><Link to="/users" className='nav-link'>Users</Link> </li>
                </ul>
                </div>
            </nav>
        </div>
    )
}
export default Navbar