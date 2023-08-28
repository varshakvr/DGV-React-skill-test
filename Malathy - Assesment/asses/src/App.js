import React from 'react';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import Nav from './Nav';
import ProductList from './ProductList';
import Login from './Login';

function App() {
  return (
    <div className="App">
      <Header />
            <Nav/>
            <ProductList />
            <Login/>
            {/* Include routing logic for different pages */}
            {/* Example: <Route path="/login" component={Login} /> */}
            <Footer />
    </div>
  );
}

export default App;




