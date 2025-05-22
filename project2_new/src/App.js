import './App.css';
import React, { useState } from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";

// Component imports
import Home from "./Home";
import About from "./About";
import Products from "./Card";  
import Navbar from "./Navbar";
import Footer from './Footer';
import Header from './Header';
import Cart from './Cart';
import Modalwindow from './Modalwindow'; 
import Contact from './Contact'




function App() {
  const [cartItems, setCartItems] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);

  /*const [showModal, setShowModal] = useState(false);*/

  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  //remove 
const removeFromCart = (index) => {
  const newCart = cartItems.filter((item, i) => i !== index);
  setCartItems(newCart);
};

  return (
    <BrowserRouter>
      <Header />
      <Navbar cartCount={cartItems.length} />
      <Routes>
        <Route path='/' element={<Home />} />  
        <Route 
          path='/products' element={<Products addToCart={addToCart} setSelectedItem={setSelectedItem}/>} 
        />
        <Route path='/contact' element={<Contact />} />
        <Route path='/about' element={<About />} />
        <Route path='/cart' element={<Cart cartItems={cartItems} removeFromCart={removeFromCart}  />} />
      </Routes>

      {selectedItem && (
        <Modalwindow 
          item={selectedItem} 
          onClose={() => setSelectedItem(null)} 
        />
      )}
      <Footer />
    </BrowserRouter>
  );
}

export default App;