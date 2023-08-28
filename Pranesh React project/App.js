import React from "react";
import Projectheader from "./Projectheader";
import Projectproductdetails from "./Projectproductdetails";
import ProductList from "./ProductList";
import Projectcart from "./Projectcart";

function App()
{
    return(
       <div style={{backgroundColor: "gray"}}>
        <center>
        <Projectheader/>
        <ProductList/>
        <br></br>
        <Projectproductdetails/>
        </center>
        <Projectcart/> 
       </div>
    )
    }
    
export default App;