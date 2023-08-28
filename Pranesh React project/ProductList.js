import React from 'react';

const ProductList = () => {
  return (
    <div className="product-list">
      <h1 style={{background: "black", color: "white" }}>Product List</h1>
      <h5>Tuxedo</h5>
      <p>Price: 4999 rs</p>
      <button>Wish List</button>
      <br></br>
      
      <h5>Jacket</h5>
      <p>Price: 999 rs</p>
      <button>Wish List</button>
      <br></br>

      <h5>Blazer</h5>
      <p>Price: 2999 rs</p>
      <button>Wish list</button>
      <br></br>
    </div>
  );
};

export default ProductList;

