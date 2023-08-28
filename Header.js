import React from 'react';

function Header() {
  return (
    <header style={{ backgroundColor: 'blue', color: 'grey', padding: '10px', textAlign: 'center' }}>
      <h1>Your Ecommerce Store</h1>
      <nav>
        <a href="/">Home</a> |
        <a href="/products">Login</a> |
        <a href="/cart">Signin</a> |
        <a href="/account">Product</a>
      </nav>
    </header>
  );
}

export default Header;
