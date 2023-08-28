import React from 'react';

const Checkout = ({ cartItems }) => {
  const totalAmount = cartItems.reduce((total, item) => total + item.price, 0);

  return (
    <div className="checkout">
      <h2>Checkout</h2>
      <p>Total Amount: ${totalAmount.toFixed(2)}</p>
      <button>Place Order</button>
    </div>
  );
};

export default Checkout;
