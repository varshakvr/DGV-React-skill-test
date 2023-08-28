import React from 'react';

function Header() {
  return (
    <header style={{ backgroundColor: 'orange', color: 'peach', padding: '10px', textAlign: 'center' }}>
      <h1>WONDERING SHOP</h1>
      <nav>
        <a href="/">Home</a> |

        <a href="/cart">Cart</a> |
      
      </nav>
    </header>
  );
}

export default Header;