import React from 'react';
import '../Styles/Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <a href="/" className="logo">
          template4u
        </a>
      </div>
      <div className="navbar-center">
        <ul className="nav-links">
          <li><a href="/home">Home</a></li>
          <li><a href="/explore">Explore</a></li>
          <li><a href="/create">Create</a></li>
          <li><a href="/share">Share</a></li>
        </ul>
      </div>
      
    </nav>
  );
};

export default Navbar;