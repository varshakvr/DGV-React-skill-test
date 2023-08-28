
import React from 'react';
import './ProductDetails.css';

const ProductDetails = (props) => {
  const { name, price, description, imageUrl } = props.product;
  
  return (
    <div className="product-details">
      <img src={imageUrl} alt={name} className="product-image" />
      <h2 className="product-name">{name}</h2>
      <p className="product-price">${price}</p>
      <p className="product-description">{description}</p>
    </div>
  );
};

export default ProductDetails;
