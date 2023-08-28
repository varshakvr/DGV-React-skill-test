// ProductDetails.js
import React from 'react';
import Tuxedo from "./T2.png"
import Jacket from "./image.jpg"
import Long from "./long.jpg"

const ProductDetails = () => {
  return (
    <div className="product-details">
      <h1 style={{background: "black", color: "white"}}>Product Details</h1>
      <h2>Tuxedo</h2>
      <img style={{ width: 500, height: 600 }}src={Tuxedo} alt="tuxedo" />
      <p>a man's jacket for semiformal evening dress, traditionally of black or dark-blue color and characteristically having satin or grosgrain facing on the lapels</p>
      <p>Price: 4999 rs</p>
      <br></br>

      <h2>Jacket</h2>
      <img style={{ width: 500, height: 600 }} src={Jacket} alt="jacket" />
      <p>A jacket is a garment for the upper body, usually extending below the hips. </p>
      <p>Price: 999 rs</p>
      <br></br>
      
      <h2>Long Over Coat</h2>
      <img style={{ width: 500, height: 600 }} src={Long} alt="long" />
      <p>An overcoat is a type of long coat intended to be worn as the outermost garment, which usually extends below the knee.</p>
      <p>Price: 2999 rs</p>
      <br></br>
    </div>
  );
};

export default ProductDetails;

