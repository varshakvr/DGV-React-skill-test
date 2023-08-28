import React from 'react'
import Logo from "./capture.PNG"
import styles from  "./Navebar.module.css";
import Navebar from './Navebar';

function Header() {
      return (
        <div className={styles.containe}>
            <div className={styles.logo_container}>
            <img src={Logo} />
            </div>      
            <Navebar /> 
        </div>
      )
    }
export default Header