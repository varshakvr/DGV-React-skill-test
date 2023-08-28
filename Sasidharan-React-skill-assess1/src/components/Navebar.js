import React from 'react'
import { Link } from 'react-router-dom';
import styles from  "./Navebar.module.css";
function Navebar() {

  return ( 
        <div className={styles.links_container_l}>
            <Link className={styles.links} to="/">Home</Link>
            <Link className={styles.links} to="/product">Product</Link>
            <div className={styles.cartlogo}>
            </div>
        </div>
  )
}
export default Navebar