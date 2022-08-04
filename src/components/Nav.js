import React from 'react';
import { Link } from 'react-router-dom';
import Cart from './Cart';

function Nav(props) {
  const { cart, removeFromCart } = props;
  return (
    <div className="nav">
      <div className="title">Happy Paws</div>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="shop/all">Shop</Link>
      </div>
      <Cart removeFromCart={removeFromCart} cart={cart} />
    </div>
  );
}

export default Nav;
