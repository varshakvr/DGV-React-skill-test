
import Form from "./Assignment/Form";
import Header from "./E-com/Header";
import ProductDetail from "./E-com/ProductDetail";

import { Routes,Route, Link } from 'react-router-dom';
import Nav from "./E-com/Nav";
import Home from "./E-com/Home";




function App()
{
   
    return(
        
        <div className="App">
           
           <Header/>
            <Routes>
            
            <Route path="/E-com/ProductDetail" component={ProductDetail}></Route>
            </Routes> 
            
            
        </div>
    )
}


export default App;
