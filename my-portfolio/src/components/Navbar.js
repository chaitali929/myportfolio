import React from "react";
import { Link } from "react-router-dom";
import '../styles/Navbar.css';  // We'll add the styles in the next step

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li><Link to="/" className="nav-link">Home</Link></li>
        <li><Link to="/about" className="nav-link">About</Link></li>
        <li><Link to="/projects" className="nav-link">Projects</Link></li>
        <li><Link to="/contact" className="nav-link">Contact</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
