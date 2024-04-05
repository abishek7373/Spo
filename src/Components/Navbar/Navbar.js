import React from 'react';
import './Navbar.css'
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <ul  className="list">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/register">Register</Link></li>
        <li><Link to="/profile">Profile</Link></li>
        <li><Link to="/search">Search</Link></li>
      </ul>  
    </nav>
  );
}

export default Navbar;
