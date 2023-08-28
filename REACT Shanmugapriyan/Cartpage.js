import React, { useState } from 'react';

const CartPage = () => {
  const initialCart = []; 
  const [cart, setCart] = useState(initialCart);

  const addToCart = (product) => {
    const updatedCart = [...cart, product];
    setCart(updatedCart);
  };

  return (
    <div className="cart-page">
      <h2>Your Cart</h2>
      <ul>
        {cart.map((product, index) => (
          <li key={index}>{product.name}</li>
        ))}
      </ul>
      <div className="product-list">
        <h3>Available Products</h3>
        <ul>
  
          <li>
            Product A
            <button onClick={() => addToCart({ name: 'Product A' })}>Add to Cart</button>
          </li>
          <li>
            Product B
            <button onClick={() => addToCart({ name: 'Product B' })}>Add to Cart</button>
          </li>
         
        </ul>
      </div>
    </div>
  );
};

export default CartPage;
