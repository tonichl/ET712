import React from "react";
import Items from "./Items";
import './App.css';

function Card({ addToCart, setSelectedItem }) {
  return (
    <div className="products-container">
      {/* Loop through categories */}
      {Items.map((category) => (
        <div key={category.category}>
          <h2 className="category-title">{category.category}</h2>
          
          {/* Loop through products in this category */}
          <div className="items-grid">
            {category.products.map((item) => (
              <div key={item.id} className="item-card">
                <img 
                  src={item.image} 
                  alt={item.name}
                  onClick={() => setSelectedItem(item)}
                />
                <h3>{item.name}</h3>
                <p>${item.price} • {item.pack}</p>
                <button className="add-to-cart-btn" onClick={() => addToCart(item)}>
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Card;