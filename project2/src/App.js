import React, { useState } from 'react';
import{Route, Routes, BrowserRouter} from "react-router-dom";
import Navbar from './Navbar';
import ProductList from './ProductList';
import Cart from './Cart';
import './App.css';
import './Card';
import './Footer';

//import image
import Aspire from './product_img/Aspire-Healthy-Energy.png';
import C4 from './product_img/C4.png';
import Celsius from './product_img/Celsius-Functional-Essential.png'
import Fast from './product_img/Fast-Twitch.png'
import Gorilla from './product_img/Gorilla-Mind.png'
import Guayaki from './product_img/Guayaki-Yerba-Mate.png'
import Jocko from './product_img/Jocko-GO.png'
import Lucky from './product_img/Lucky-Energy.png'
import Mountain from './product_img/Mountain-Dew-Kickstart.png'
import Redbull from './product_img/Red-Bull.png'



function App() {
  const [cart, setCart] =useState([])

  const removeFromCart = (productId) => {
    setCart(prevCart => prevCart.filter(item => item.id !== productId));
  };

  const changeQuantity = (productId, amount) => {
  setCart(prevCart => {
    // First check if we need to remove the item
    const existingItem = prevCart.find(item => item.id === productId);
    if (existingItem && existingItem.quantity + amount < 1) {
      return prevCart.filter(item => item.id !== productId);
    }
    
    // Otherwise update quantity
    return prevCart.map(item => {
      if (item.id === productId) {
        return { ...item, quantity: item.quantity + amount };
      } else {
        return item;
      }
    });
  });
};

  const products = [
    { id: 1, name: 'Celsius Functional Essential', price: 22.99, pack:'12-Pack', image:Celsius},
    { id: 2, name: 'C4', price: 22.99, pack:'12-Pack', image:C4 },
    { id: 3, name: 'Red Bull (Original Fravor)', price: 34.99, pack:'24-Pack', image:Redbull},
    { id: 4, name: 'Jocko Go', price: 29.99, pack:'12-Pack', image:Jocko },
    { id: 5, name: 'Fast Twitch', price: 23.99, pack:'12-Pack', image:Fast },
    { id: 6, name: 'Guayakí Yerba Mate', price: 29.99, pack:'12-Pack', image:Guayaki },
    { id: 7, name: 'Gorilla Mind', price: 34.99, pack:'12-Pack', image: Gorilla},
    { id: 8, name: 'Mountain Dew Kickstart', price: 18.99, pack:'12-Pack', image:Mountain},
    { id: 9, name: 'Lucky Energy', price: 25.99, pack:'12-Pack', image:Lucky},
    { id: 10, name: 'Aspire Healthy Energy', price: 24.99, pack:'12-Pack', image:Aspire },
  ];

const addToCart = (product) => {
  setCart(previewCart => {
    const existingItem = previewCart.find(item => item.id === product.id);
    
    if (existingItem) {
      return previewCart.map(item => {
        if (item.id === product.id) {  // check the condition here
          const updatedItem = { ...item };
          updatedItem.quantity += 1;
          return updatedItem;
        }
        return item;
      });
    }
    
    const newItem = { ...product };
    newItem.quantity = 1;
    return [...previewCart, newItem];
  });
};

//count the cart 
  let totalQuantity = 0;
  cart.forEach(item => {
    totalQuantity += item.quantity;
  });

  return (
    <div className="App">
    <BrowserRouter>
         <Navbar cartCount={totalQuantity} />
        <Routes>
          <Route 
            path="/" element={<ProductList products={products} addToCart={addToCart} />} 
          />
          <Route 
            path="/cart" 
            element={<Cart cartItems={cart} changeQuantity={changeQuantity} removeFromCart={removeFromCart} />}
          />

        </Routes>
    </BrowserRouter>
    </div>
    
  );
}

export default App;