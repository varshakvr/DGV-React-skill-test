import './App.css';
import Footer from "./components/Footer";
import Home from "./pages/home/Home";
import Products from "./pages/product/Products";
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route ,Navigate} from 'react-router-dom';
import Header from './components/Header';

function App() {
    return (
          <div className="App">
        <Router >
          <Header />
          <Routes>
            <Route path='/' exact element={<><Home /> <Footer /> </>} />
            <Route path='/product' exact element={<><Products /> <Footer /></>} />
            <Route path="/*" element={<Navigate to="/" />} />
          </Routes> 
        </Router>        
      </div>
    );
}

export default App;
