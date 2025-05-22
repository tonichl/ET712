import React from 'react';
import './App.css'; 

function Cart({ cartItems, removeFromCart }) {
  // Calculate totals
  const subtotal = cartItems.reduce((sum, item) => sum + item.price, 0);


  const taxRate = 0.08875;

  const tax = subtotal * taxRate;

  const total = subtotal + tax;

  return (
    <div className="cart-page">
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Empty cart</p>
      ) : (
        <>
          {cartItems.map((item, index) => (
            <div key={index} className="cart-item">
               <img 
                  src={item.image} 
                  alt={item.name}
                  className="cart-item-image"
                />
              <h3>{item.name}</h3>
              <p>${item.price.toFixed(2)}</p>
              <button onClick={() => removeFromCart(index)}>
                Remove
              </button>
            </div>
          ))}
          
          <div className="totals">
            <p>Subtotal: ${subtotal.toFixed(2)}</p>
            <p>Tax: ${tax.toFixed(2)}</p>
            <p>Total: ${total.toFixed(2)}</p>
          </div>
        </>
      )}
    </div>
  );
}
export default Cart;