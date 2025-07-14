import React from 'react'
import '../styles/Navbar.css'
import { Link } from 'react-router-dom'


function Navbar() {
  return (
    <div className='navbar-container'>
        <Link to="/">Home</Link>
        <Link to="/users">User</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
    </div>
  )
}

export default Navbar