import React from 'react';

function Header() {
  return (
    <header style={{ backgroundColor: '#FFE5B4', color: 'peach', padding: '10px', textAlign: 'center' }}>
      <h1>FASHION Store</h1>
      <nav>
        <a href="/">Home</a> |
        <a href="/products">Products</a> |
        <a href="/cart">Cart</a> |
      
      </nav>
    </header>
  );
}

export default Header;