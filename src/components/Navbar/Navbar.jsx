import React from 'react';
import './Navbar.css'
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
        <div className='navLeftSide sacramento-regular'>
          <NavLink to="/NT_Portfolio/">NicoleTringali.com</NavLink>
        </div>
        <div className="navRightSide">            
            <NavLink to="/NT_Portfolio/about">About Me</NavLink>
            <div className="subnav">
              <div className="subnavbtn">Portfolio</div>
              <div className="subnav-content">
                <NavLink to="/NT_Portfolio/portfolio">Packages</NavLink>
                <NavLink to="/NT_Portfolio/Blogs">Blogs</NavLink>
                <NavLink to="/NT_Portfolio/Emails">Emails</NavLink>
                <NavLink to="/NT_Portfolio/Lotto">Lotto Cards</NavLink>
              </div>
            </div>
            <NavLink to="/NT_Portfolio/contact">Hire Me!</NavLink>
        </div>
    </nav>
  )
}

export default Navbar