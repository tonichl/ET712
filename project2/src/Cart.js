import React from "react";
import './App.css';

function Cart({ cartItems, changeQuantity, removeFromCart }) {
    // Calculate totals
    let subtotal = 0;
    cartItems.forEach(item => {
        subtotal += item.price * item.quantity;
    });

    const taxRate = 0.08875; // 8.875% tax
    const tax = subtotal * taxRate;
    const total = subtotal + tax;

    // Handle empty cart
    let cartContent;
    if (cartItems.length === 0) {
        cartContent = <p className="empty-cart">Your cart is empty</p>;
    } else {
        cartContent = (
            <>
                <div className="cart-items">
                    {cartItems.map((product) => {
                        const itemTotal = product.price * product.quantity; // Calculate here
                        return (
                            <div key={product.id} className="cart-item">
                                <img 
                                    src={product.image} 
                                    alt={product.name}
                                    className="cart-item-image"
                                />
                                <div className="cart-item-details">
                                    <h3>{product.name}, {product.pack}</h3>
                                    <p>Price: ${product.price.toFixed(2)}</p>
                                    <div className="quantity-controls">
                                        <button 
                                            onClick={() => changeQuantity(product.id, -1)}
                                            disabled={product.quantity <= 1}
                                        >-</button>

                                        <span>Qty: {product.quantity}</span>
                                        <button onClick={() => changeQuantity(product.id, 1)}
                                        >+</button>

                                        <button 
                                            className="remove-btn"
                                            onClick={() => removeFromCart(product.id)}
                                        >
                                        Remove Item
                                        </button>
                                        
                                    </div>
                                    <p className="item-total">Item Total: ${itemTotal.toFixed(2)}</p>
                                </div>
                            </div>
                        );
                    })}
                </div>
                
                {/* Totals Section*/}
                <div className="cart-summary">
                    <p>Subtotal: ${subtotal.toFixed(2)}</p>
                    <p>Tax (8.875%): ${tax.toFixed(2)}</p>
                    <p>Total: ${total.toFixed(2)}</p>
                </div>
            </>
        );
    }

    return (
        <div className="cart-container">
            <h1>Cart Items</h1>
            {cartContent}
        </div>    
    );
}

export default Cart;