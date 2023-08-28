import React from "react";
import style from "./Css/Footer.module.css"
import {Link} from "react-router-dom";
import { AiFillInstagram,AiOutlineWhatsApp,AiFillFacebook,AiFillTwitterCircle} from "react-icons/ai";
import { BiLogoWhatsappSquare } from "react-icons/bi";

function Footer(){
    return(
       <>
       <div className={style.footer}>
         <div className={style.container}>
            <div className={style.row}>
               <div className={style.col}>
                  <h4>VARSHA CLOTHING</h4>
                  <ul>
                     <li>< Link exact to="/home" className={style.link} >HOME</Link> </li>
                 <li>< Link to="/product" className={style.link} >PRODUCT</Link> </li>
                 <li>< Link to="/sales" className={style.link} >SALE</Link> </li>
                  </ul>
               </div>
               <div className={style.col}>
                  <h4>CONTACT INFORMATION</h4>
                  <ul>
                     <li><Link className={style.link} >Email :Scooper@gmail.com </Link></li>
                 <li><Link className={style.link} >Phone Number : 9070890378</Link></li>
                 <li><Link className={style.link} >Working Hours : 8 AM - 11 PM</Link> </li>
                  </ul>
               </div>
               <div className={style.col}>
                  <h4>FOLLOW US</h4>
                 <div className={style.sociallinks}>
                  <AiFillInstagram className={style.social} />
                  <BiLogoWhatsappSquare  className={style.social}/>
                  <AiFillFacebook  className={style.social}/>
                  <AiFillTwitterCircle  className={style.social}/>
                 
                  </div> 

               </div>
      
               <div className={style.col}>
                 
                 
               </div>

            </div>
         </div>
         <div className={style.copy}>VARSHA-CLOTHING © 2023 All Rights Reserved</div>
       </div>
       </>
    );
}
export default Footer;