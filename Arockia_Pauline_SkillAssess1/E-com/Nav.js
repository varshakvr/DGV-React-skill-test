import React from 'react'
import { Link } from 'react-router-dom'
import ProductDetail from './ProductDetail';


const Nav=()=> {
    const ulStyle={
        listStyle:"none",
        display:"flex",
        justifyContent:"space-between",
        fontSize:"large",
        fontWeight:"bold"
        
    }
  return (
    <nav>
        <ul className="nav-list"style={ulStyle}>
       
        <li><Link to="#">Men</Link></li>
            <li><Link to="ProductDetail">Women</Link></li>
            <li><Link to="#">Kids</Link></li>
            <li><Link to="#">Home Appliances</Link></li>
            <li><Link to="#">Electronics</Link></li>

        </ul>
        </nav>
  )
}
export default Nav;