import React from "react";
import './App.css';

function Product({ product, onAddToCart }) {
    return (
      <div className="product">
        <h3>{product.name}, {product.pack}</h3>
        <img 
            src={product.image} 
            alt={product.name}
            className="product-image"
          />
        <p>${product.price.toFixed(2)}</p>
        <button onClick={onAddToCart}>Add to Cart</button>
      </div>
    );
  }
  
  export default Product;