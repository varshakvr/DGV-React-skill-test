import React from 'react';
import { Link } from 'react-router-dom';

const ProductDetail = () => {
  const product = {
    name: 't-shirt',
    price: 'Rs 250',
    description: 'Fit Type: Regular Fit',
    imageUrl: 'https://i.pinimg.com/originals/60/c6/8a/60c68a5d73b025bea7f24551a60e19de.jpg'
  };

  const productDetailStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '2rem'
  };

  const imageStyle = {
    width: '300px',
    marginBottom: '1rem'
  };

  return (
    <div style={productDetailStyle}>
      <h2>{product.name}</h2>
      <img src={product.imageUrl} alt={product.name} style={imageStyle} />
      <p>{product.price}</p>
      <p>{product.description}</p>
    </div>
  );
};

export default ProductDetail;
