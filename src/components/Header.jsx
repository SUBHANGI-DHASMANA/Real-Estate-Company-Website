import React from 'react'
import Navbar from './Navbar'

const Header = () => {
  return (
    <div className='header'>
      <Navbar/>
      <div className="intro">
        <p>Looking for a property!</p>
        <h1><span>Buy </span>and<span> Sell</span> Properties</h1>
        <p className="details">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam perspiciatis maxime consectetur impedit, maiores laudantium aliquid distinctio inventore nesciunt tempora!</p>
        <a href="#" className="header-btn">Details</a>
      </div>
    </div>
  )
}

export default Header
