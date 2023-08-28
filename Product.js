import React from 'react';
import './Product.css'; 


function Product() {
  const product = {
    name: 'Grocery & Gourmet',
    price: 'Rs.299',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit....',
    imageUrl: 'product-image.jpg', 
  };

  return (
    <div className="product-details">
      <div className="product-image">
        <img src={product.imageUrl} alt={product.name} />
      </div>
      <div className="product-info">
        <h2>{product.name}</h2>
        <p className="price">{product.price}</p>
        <p className="description">{product.description}</p>
        <button className="add-to-cart">Add to Cart</button>
      </div>
    </div>
  );
}
export default Product;
