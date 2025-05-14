import React from "react";
import {Link} from "react-router-dom";
import './App.css';

function Navbar({ cartCount }) {
    return (
      <nav className="navbar">
        <Link to="/" className="home">Home</Link>
        <h1>Energize UP Drink Store</h1>
        <Link to="/cart" className="cart">
          Cart ({cartCount})
        </Link>
      </nav>
    );
  }
  
  export default Navbar;