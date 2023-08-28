import React from 'react'
import {Link} from "react-router-dom";

const Nav=()=>{
  return (
    <nav>
        <ul className='nav-list'>
        <li><Link to='/'>Product</Link></li>
        </ul>
    </nav>
  )
}
export default Nav
