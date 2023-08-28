import React from 'react';
import styles from "./Product.module.css";

function ProductItem({products}) {
     
  return (
    <>
    {products.map(product => (
        <div className={styles.card}>
            <div className={styles.imagecon}>
                <img src={product.image} />
            </div>
            <div className={styles.content}>
                <p className={styles.name}>{product.title}</p>
                <p className={styles.desc}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <div className={styles.pricediv}>
                  <p className={styles.price}>Price - ₹ {Math.floor(product.price)}</p>
                  <button className={styles.add}>Add to Cart</button>
                </div>
            </div>
        </div>
    ))}
    </>
  )
}

export default ProductItem