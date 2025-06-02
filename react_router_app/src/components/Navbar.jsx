import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    
  return (
    <div className='navbar'>
      <ul className='nav-items'>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
        <li><NavLink to="/services">services</NavLink></li>
        <li><NavLink to="/contact">contact</NavLink></li>
      </ul>
    </div>
  )
}

export default Navbar
