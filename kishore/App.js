import { Routes,Route,BrowserRouter } from "react-router-dom";
import Greeting from "./Greeting";

import About from "./About";
import Home from "./Home";
import Contact from "./Contact";

import HelloWorld from "./HelloWorld";
import AboutMe from "./AboutMe";
import ParentComponent from "./ParentComponent";
import HeaderNav from "./HeaderNav";
import Footer from "./Footer";
import Cart from "./Cart";


function App(){
  const name="KISHORE";
  const randomno=Math.floor(Math.random()*10)+1;
 
  return(
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Home/>}/>
        <Route path="About" element={ <About/>}/>
        <Route path="Contact" element={ <Contact/>}/>
        <Routes>
          {/* ... existing routes ... */}
        </Routes>

        {/* ... existing JSX ... */}

        {/* Add the Cart component */}
        <Cart />

      </Routes>

     <p>Hello,{name}</p>
      <p>Random Number is {randomno}</p>
      <Greeting name="Sai"/>
      <Greeting name="Shrikanth"/>
      <Greeting name="Ram"/>
      <p>this is a app component</p>
        <propsex name="alice"/>
        <propsex name="leo"/>

      
      <HelloWorld/>
      <AboutMe/>
      <ParentComponent/>
      <HeaderNav/>
      <Footer/>
      </BrowserRouter>
      <rect/>
          </div>
  );
}

export default App;

