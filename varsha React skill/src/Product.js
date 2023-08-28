import React from 'react'
import style from "./Css/Product.module.css"
import ProductImage1 from './Images/p1.jpg';
import ProductImage2 from './Images/p2.jpg';
import ProductImage3 from './Images/p3.jpg';
import ProductImage4 from './Images/p4.jpg';
 import ProductImage5 from './Images/p5.jpg';
 import ProductImage6 from './Images/p6.jpg';
 import ProductImage7 from './Images/p7.jpg';
const products = [
  { id: 1, name: 'Product 1', price: '$19.99',image: ProductImage1 },
  { id: 2, name: 'Product 2', price: '$24.99' ,image: ProductImage2},
   { id: 3, name: 'Product 3', price: '$25.99' ,image: ProductImage3},
 { id: 4, name: 'Product 4', price: '$10.99' ,image: ProductImage4},
  { id: 5, name: 'Product 5', price: '$8.99' ,image: ProductImage5},
   { id: 6, name: 'Product 6', price: '$70.99' ,image: ProductImage6},
    { id: 7, name: 'Product 7', price: '$60.99' ,image: ProductImage7},
];

function Product() {
  return (
    <div className={style.productContainer}>
      <h2>Products</h2>
      <div className={style.productList}>
        {products.map(product => (
          <div className={style.productCard} key={product.id}>
               <img src={product.image} alt={product.name} className={style.productImage} />
            <h3>{product.name}</h3>
            <p>{product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Product;