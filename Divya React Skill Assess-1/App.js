import './App.css';
import Header from './Components/Header';
import ProductList from './Components/ProductList';
import CartList from './Components/CartList';
import { useState } from 'react';

function App() {

  const [product, setProduct] = useState([
    {
     
      url:'https://www.boat-lifestyle.com/cdn/shop/products/WaveCall.1_1_1800x.png?v=1685530109',
      // url:'https://rukminim1.flixcart.com/image/300/300/l51d30w0/shoe/z/w/c/10-mrj1914-10-aadi-white-black-red-original-imagft9k9hydnfjp.jpeg?q=70',
      name: 'SPORTS WATCH',
      category: 'Watches',
      seller: 'Boat LTD',
      price: 1999
    },
    {
      url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzjkL2yLqdFNpg1hAtZaT8VAlINPtOPDyMKQ&usqp=CAU',
      name: 'OPPO F7',
      category: ' MOBILE Phones',
      seller: 'Poorvika',
      price: 25999
    },
    {
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQq39iB_cO6uhZ59vubrqVuYTJQH-4Qa0hU9g&usqp=CAU',
      name: 'AMZ Laptop 8GB RAM',
      category: 'Laptops',
      seller: 'Delhi Laptops',
      price: 50000
    },
    {
      url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTr9GK8yVpHsAvp0ARGpzJsKgiCaUf6pJH1pg&usqp=CAU',
      name: 'Airpods',
      category: 'Bluetooth',
      seller: 'Noise',
      price: 400
    },
    {
      url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlfOAAz4tJdlhleVWkjVd27tsuK_mDN4Sifg&usqp=CAU',
      // url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSG9e8Axt-h9q8EIybKfjGzbkIWJAr50_BX7Q&usqp=CAU',
      name: 'IDEA PAD',
      category: 'Tablet',
      seller: 'Lenovo',
      price: 20000
    },
    {
      url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDrmSkputlVKyoODhZ5-1aSnODeSpUuWlIdLz0kQScixP8oFjCarIQVBRQjvk5TO-z4RU&usqp=CAU',
      // url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9xzgtOpMxdpfgBOg3OKsEqYRkNBbuprJj4w&usqp=CAU',
      name: 'Cup red Color',
      category: 'Cup',
      seller: 'ABS Ltd',
      price: 10000
    },
  ])

  const [cart, setCart] = useState([])
  const [showCart, setShowCart] = useState(false)

  const addToCart = (data) => {
    setCart([...cart, { ...data, quantity: 1 }])
  }

  const handleShow = (value) => {
    setShowCart(value)
  }

  return (
    <div>
      <Header count={cart.length}
        handleShow={handleShow} ></Header>

      {
        showCart ?
          <CartList cart={cart} ></CartList> :
          <ProductList product={product} addToCart={addToCart} ></ProductList>
      }


    </div>
  );
}

export default App;