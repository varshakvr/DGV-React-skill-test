import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; 
function Header() {
  return (
    <header className="header">
      <div className="log">One Minute at your DoorStep</div>
      <nav className="nav">
        <ul>
          <li><a href="/">Home</a></li>
          <Link to="/Product.js">Product</Link>
        </ul>
      </nav>
    </header>
  );
}
export default Header;
