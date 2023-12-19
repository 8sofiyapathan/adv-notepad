import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div>
    <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
  <div className="container-fluid">
    <h2 className="navbar-brand">Adv-Notepapd</h2>
    <div className="collapse navbar-collapse" id="collapsibleNavbar">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">About</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </div>
  ) 
}

export default NavBar
