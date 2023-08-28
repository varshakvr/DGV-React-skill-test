// Cart.js
import React, { useState } from "react";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

 

  const removeCartItem = (index) => {
    const newCartItems = cartItems.filter((item, i) => i !== index);
    setCartItems(newCartItems);
  };

  return (
    <div className="cart">
      <h3>Cart</h3>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cartItems.map((item, index) => (
            <li key={index}>
              {item.name} - ${item.price}{" "}
              <button onClick={() => removeCartItem(index)}>Remove</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;
