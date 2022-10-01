import React from 'react'
import logo from "../images/logo1.png"

const Navbar = () => {
  return (
    <nav>
        <a href="#" className='logo'>
            <img src={logo} alt="logo" />
        </a>
        <input type="checkbox" id='menu-btn' className="menu-btn" />
        <label for="menu-btn" className="menu-icon">
            <span className="nav-icon"></span>
        </label>
        <ul className="menu">
            <li><a href="#" className='active'>home</a></li>
            <li><a href="#about">about</a></li>
            <li><a href="#agents">agents</a></li>
            <li><a href="#property">property</a></li>
            <li><a href="#contact">contact</a></li>
        </ul>
        <a href="#" className="property">Properties</a>
    </nav>
  )
}

export default Navbar
