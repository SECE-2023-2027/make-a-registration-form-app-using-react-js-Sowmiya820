import React from 'react';
import '../styles/Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">MyApp</div>
      <div className="nav-links">
        <a href="#home">Home</a>
        <a href="#explore">Explore</a>
        <a href="#create">Create</a>
        <a href="#share">Share</a>
       
      </div>
    </nav>
  );
}

export default Navbar;
