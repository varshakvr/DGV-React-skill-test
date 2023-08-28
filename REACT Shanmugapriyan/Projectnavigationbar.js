import React from 'react';
import {Link} from 'react-router-dom'

const NavigationBar = () => {
  const ulstyle={
    listStyle:"none",
    display:"flex",
    justifycontent:"space-between",
    fontSize:"large",
    fontweight:"bold",
  }
  return (
    <nav>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/products">Products</a></li>
        <li><a href="/cart">Cart</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
    </nav>
  );
};

export default NavigationBar;
