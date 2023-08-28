import React, { useState } from 'react';

const Projectcart = () => {
  const initialCart = []; 
  const [cart, setCart] = useState(initialCart);

  const addToCart = (product) => {
    const updatedCart = [...cart, product];
    setCart(updatedCart);
  };

  return (
    <div className="cart-page">
      <h1 style={{background: "black", color: "white", textAlign: "center" }}>Your Cart</h1>
      <ul>
        {cart.map((product, index) => (
          <li key={index}>{product.name}</li>
        ))}
      </ul>
      <div className="product-list">
        <h3>Available Products</h3>
        <ul>
  
          <li>
            Tuxedo
            <button onClick={() => addToCart({ name: 'Tuxedo' })}>Add to Cart</button> 
          </li>
          <br></br>
          <li>
            Jacket
            <button onClick={() => addToCart({ name: 'Jacket' })}>Add to Cart</button>
          </li>
          <br></br>
          <li>
            Long Over Coat
            <button onClick={() => addToCart({ name: 'Long over coat' })}>Add to Cart</button>
          </li>
          <br></br>
        </ul>
      </div>
    </div>
  );
};

export default Projectcart;