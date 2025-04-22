import React from "react";
import {Link} from "react-router-dom";
import './App.css';

const Navbars = function(){
    return(
        <>
            <header ClassName="title"><h1>Navigation bars</h1></header>
            <nav ClassName ="navheader">
                <section Classname="iconlink">
                    <a href ="https://https://www.qcc.cuny.edu/" target="_blank"> QCC </a>
                </section>
                <section ClassName = "navlinks">
                    <button ClassName = "tablink"><Link to="/">Home</Link></button>
                    <button ClassName = "tablink"><Link to="/about">About Us</Link></button>
                    <button ClassName = "tablink"><Link to="contact">Contact Us</Link></button>
                </section>
            </nav>
        </>
    )
}

export default Navbars