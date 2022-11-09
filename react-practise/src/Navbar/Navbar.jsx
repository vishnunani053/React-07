import React from 'react'
import { Link } from "react-router-dom"

const Navbar = () => {
    return (
        <div>
            <nav className='navbar navbar-dark bg-dark navbar-expand-lg'>
                <Link to="/" className='navbar-brand'>Product-CRUD</Link>
                <div className='ml-auto'>
                <ul className='navbar-nav'>
                    <li className='nav-list'><Link to="/products" className='nav-link'>Products</Link></li>
                    <li className='nav-list'><Link to="/createProducts" className='nav-link'>Create Products</Link></li>
                </ul>
                </div>
            </nav>
        </div>
    )
}
export default Navbar