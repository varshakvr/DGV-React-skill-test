import React from 'react';

const products = [
  {
    id: 1,
    name: 'Product 1',
    price: 19.99,
    description: 'This is the description for Product 1.',
  },
  {
    id: 2,
    name: 'Product 2',
    price: 29.99,
    description: 'This is the description for Product 2.',
  },
  // ... more products
];

const ProductList = () => {
  return (
    <div className="product-list">
      {products.map(product => (
        <div key={product.id} className="product-card">
          <h3>{product.name}</h3>
          <p>${product.price.toFixed(2)}</p>
          <p>{product.description}</p>
          <button>Add to Cart</button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
