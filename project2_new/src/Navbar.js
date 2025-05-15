import React from "react";
import {Link} from "react-router-dom";
import './App.css';

const Navbars = function({ cartCount }){
    return(
        <>
            <nav className ="navheader">
                <section className = "navlinks">
                    <button className = "tablink"><Link to="/">Home</Link></button>
                    <button className = "tablink"><Link to="/Products">Products</Link></button>
                    <button className = "tablink"><Link to="/about">About Us</Link></button>
                    <button className = "tablinkcart"><Link to="/cart">🛒 Cart ({cartCount || 0})</Link></button>
                </section>
            </nav>
        </>
    )
}

export default Navbars