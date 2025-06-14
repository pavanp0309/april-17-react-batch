import React from 'react'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <NavLink className="navbar-brand" to={'/'}>EduMinds</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className="nav-link "  to={'/'}>Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to={'/courses'}>Courses</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to={'/upcoming-batches'}>upcomingbatches</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to={'/about'}>About</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to={'/contact'}>Contact</NavLink>
        </li>
     
      
      </ul>

      {/* login button */}
      <button className='btn btn-outline-success'>GetStarted</button>
      
    </div>
  </div>
</nav>
  )
}

export default NavBar
