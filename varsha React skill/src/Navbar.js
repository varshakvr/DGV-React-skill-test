import React from 'react'
import style from "./Css/Navbar.module.css"
import logo from "./Images/VARSHA ECOM.png"
import { BsFillCartCheckFill } from "react-icons/bs";
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <>
    <nav className={style.navbar}>
<div className={style.nav}>
    <img src={logo} className={style.brandlogo} alt=""/>
      <h1 className={style.name}>VARSHA-CLOTHING</h1>
    <div className={style.navitems}>
    
        <div className={style.search}>
            <input type="text" className={style.searchbox} placeholder="search brand, product"/>
            <button className={style.searchbtn}>search</button>
        </div>
      
       <a><BsFillCartCheckFill/></a>
    </div>
</div>

<ul className={style.linkscontainer}>
  <hr></hr>
 <Link  to="/home" className={style.listitem} >HOME</Link> 
 <Link to="/product" className={style.listitem} >PRODUCT</Link> 
  <Link to="/home" className={style.listitem} >LOGIN</Link> 
   <Link to="/sales" className={style.listitem} >SALES</Link> 
    <Link to="/service" className={style.listitem} >SERVICE</Link> <hr></hr>
</ul>
</nav>
    </>
  )
}

export default Navbar