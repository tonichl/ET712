import React, { useState } from "react";
import { Link } from "react-router-dom";
import './App.css';

const Navbars = ({ cartCount }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navheader">
      {/* Mobile Hamburger Button */}
      <button className="hamburger-btn" onClick={toggleMenu}>
        {isMenuOpen ? '✕' : '☰'}
      </button>

      {/* Navigation Links - mobile toggle class */}
      <section className={`navlinks ${isMenuOpen ? 'active' : ''}`}>
        <button className="tablink">
          <Link to="/" onClick={() => setIsMenuOpen(false)}>Home</Link>
        </button>
        <button className="tablink">
          <Link to="/products" onClick={() => setIsMenuOpen(false)}>Products</Link>
        </button>
        <button className="tablink">
          <Link to="/contact" onClick={() => setIsMenuOpen(false)}>Contact Us</Link>
        </button>
        <button className="tablink">
          <Link to="/about" onClick={() => setIsMenuOpen(false)}>About Us</Link>
        </button>
        <button className="tablinkcart">
          <Link to="/cart" onClick={() => setIsMenuOpen(false)}>🛒 Cart ({cartCount || 0})</Link>
        </button>
      </section>
    </nav>
  );
};

export default Navbars;