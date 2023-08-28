import React from 'react';

function Header() {
  return (
    <header style={{ backgroundColor: '#333', color: 'blue', padding: '10px', textAlign: 'center' }}>
      <h1>Your Ecommerce Store</h1>
      <nav>
        <a href="/">Home</a> |
        <a href="/products">Products</a> |
        <a href="/cart">Cart</a> |
        <a href="/account">Account</a>
      </nav>
    </header>
  );
}

export default Header;