import React from 'react';
import './Navbar.css'
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
        <div className='navLeftSide'>
        <NavLink to="/NT_Portfolio/">NT.com</NavLink>
        </div>
        <div className="navRightSide">            
            <NavLink to="/NT_Portfolio/about">About</NavLink>
            <NavLink to="/NT_Portfolio/portfolio">Packages</NavLink>
            <NavLink to="/NT_Portfolio/Blogs">Blogs</NavLink>
            <NavLink to="/NT_Portfolio/Emails">Emails</NavLink>
            <NavLink to="/NT_Portfolio/contact">Contact</NavLink>
        </div>
    </nav>
  )
}

export default Navbar