import Product from './Product';
import React from "react";
import './App.css';

function ProductList({ products, addToCart }) {
  return (
    <div className="productlist">
      <h1 className="h1">Energy drinks</h1>
      {products.map(product => (
        <Product 
            key={product.id} 
            product={product}
            img = {product.images}
            onAddToCart={function() {addToCart(product)}} 
        />
      ))}
      
    </div>
  );
}

export default ProductList;