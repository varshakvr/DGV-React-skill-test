import React, { useState } from 'react';

const CheckoutPage = () => {
  const initialCart = []; 
  const [cart, setCart] = useState(initialCart);

  const calculateTotal = () => {
    return cart.reduce((total, product) => total + product.price, 0);
  };

  return (
    <div className="checkout-page">
      <h2>Checkout</h2>
      <div className="cart-summary">
        <h3>Cart Summary</h3>
        <ul>
          {cart.map((product, index) => (
            <li key={index}>{product.name} - ${product.price}</li>
          ))}
        </ul>
        <p>Total: Rs{calculateTotal()}</p>
      </div>
      <button className="checkout-button">Proceed to Payment</button>
    </div>
  );
};

export default CheckoutPage;
