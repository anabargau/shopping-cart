import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Shop from './components/Shop';
import Home from './components/Home';
import Nav from './components/Nav';
import './App.css';
import allProducts from './components/images/all';

function App() {
  const [cart, setCart] = useState([]);

  function getIdArray(array) {
    const newArray = [];
    array.forEach((element) => {
      newArray.push(element.item.id);
    });
    return newArray;
  }

  function addToCart(event) {
    const id = event.target.dataset.index;
    const item = allProducts.filter((product) => product.id === id)[0];
    const quantity = parseInt(document.getElementById(id).value);
    const idArray = getIdArray(cart);
    if (idArray.includes(id)) {
      let newCart = [];
      newCart = cart.map((element) => {
        const newQuantity = element.quantity + quantity;
        return element.item.id === id ? { ...element, quantity: newQuantity } : element;
      });
      setCart(newCart);
    } else {
      setCart((prevCart) => prevCart.concat({
        item,
        quantity,
      }));
    }
  }

  function removeFromCart(event) {
    const id = event.target.dataset.index;
    setCart((prevCart) => prevCart.filter((item) => item.item.id !== id));
  }

  return (
    <Router>
      <Nav cart={cart} removeFromCart={removeFromCart} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="shop/*" element={<Shop addToCart={addToCart} />} />
      </Routes>
    </Router>
  );
}

export default App;
