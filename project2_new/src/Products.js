import React from "react";
import items from "./Items";
import './App.css';

function Products({ addToCart, showModal }) {


  return (
    <div className="products-container">
      <h2>Shop Our Items</h2>
      <div className="items-grid">
        {items.map((item) => (
          <div key={item.id} className="item-card">
            <h3>{item.name}</h3>
            <p className="pack">{item.pack}</p>
            <p className="price">${item.price}</p>
            <img 
            src={item.image} 
            alt={item.name}
            className="product-image"
            onClick={showModal}

            
            />
            <button 
              onClick={() => addToCart(item)}
              className="add-to-cart-btn"
            >
              + Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;