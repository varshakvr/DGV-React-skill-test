import { BrowserRouter as Router ,Route,Routes } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import Product from "./Product";
import Sale from "./Sale";
import Service from "./Service";
import Footer from "./Footer";

function App() {
  return (
    <>
    <Router>
<Navbar/>
<Routes>
  <Route path="/home" element={<Home/>}/>
  <Route path="/product" element={<Product/>}/>
   <Route path="/sales" element={<Sale/>}/>
    <Route path="/service" element={<Service/>}/>
 
</Routes>
<Footer/>
</Router>

</>
  );
}

export default App;
