import React from 'react';

const Card = ({ product, onAddToCart, onShowModal }) => {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} onClick={onShowModal} />
      <h3>{product.name}</h3>
      <p>${product.price} • {product.pack}</p>
      <button onClick={() => onAddToCart(product)}>Add to Cart</button>
    </div>
  );
};

export default Card;