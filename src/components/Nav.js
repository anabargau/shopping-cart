import React from 'react';
import { Link } from 'react-router-dom';
import Cart from './Cart';
import Paws from './icons/paws.svg';

function Nav(props) {
  const { cart, removeFromCart } = props;
  return (
    <div className="nav">
      <div className="title">
        Happy Paws
        {' '}
        <img className="paws" src={Paws} alt="paws-icon" />
      </div>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="shop/all">Shop</Link>
      </div>
      <Cart removeFromCart={removeFromCart} cart={cart} />
    </div>
  );
}

export default Nav;
