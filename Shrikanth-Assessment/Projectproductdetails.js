import React from 'react';
import Tuxedo from "./T2.jpg"

const ProductDetails = ({ product }) => {
  return (
    <div className="product-details">
      <img src={Tuxedo} alt="tuxedo" /><br></br>
      <h2>Blazers For Men</h2><br></br>
      <h3>A Young Man Is Dressed Up In Well Suit</h3><br></br>
      <h3>This Dress Makes The Person Who Wears It As A Royal Men </h3><br></br>
      <h2>Price - 6999 rs only</h2><br></br>
      <button>Add to Bag</button>
    </div>
  );
};

export default ProductDetails;

