import React from 'react';
import download from "./download.jpeg"

const ProductDetails = ({ product }) => {
  return (
    <div className="product-details">
      <img src={download} alt="download" />
      <h2>Sneakers</h2>
      <p>White sneakers are a versatile and iconic footwear choice that seamlessly blends style and comfort.<br></br> Characterized by their clean, crisp, and neutral hue,<br></br> white sneakers have become a staple in both casual and semi-formal fashion.</p>
      <p><b>Price: 1999 rs</b></p>
    </div>
  );
};

export default ProductDetails;

