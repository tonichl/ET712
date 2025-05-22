import React from "react";
import './App.css';
import drinks from './product_img/drinks.png'

const Home = function(){
    return(
        <>
            <header className="title"><h1>welcome to Beverage store</h1></header>
            <div className="home_image">
                <img 
                    src={drinks} 
                    alt="drinks" 
                    className="home_image"
                />
            </div>
            
        </>
    )
}

export default Home