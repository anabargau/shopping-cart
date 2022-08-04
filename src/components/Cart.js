import React from 'react';
import uniqid from 'uniqid';

function Cart(props) {
  const { cart, removeFromCart } = props;
  let productsNum = 0;
  let totalPrice = 0;
  cart.forEach((item) => {
    productsNum += item.quantity;
    totalPrice += item.quantity * parseInt(item.item.price[0] + item.item.price[1]);
  });
  function dropdownClick() {
    const elem = document.getElementById('cart');
    elem.classList.toggle('show');
  }
  return (
    <div>
      <button type="button" className="dropdown" onClick={dropdownClick}>
        Cart (
        {productsNum}
        )
      </button>
      <div id="cart">
        <ul className="cart-content show">
          {cart.map((item) => (
            <li key={uniqid()}>
              {item.item.title}
              {' '}
              {item.item.price}
              {' '}
              {item.quantity}
              <button data-index={item.item.id} type="button" onClick={removeFromCart}>X</button>
            </li>
          ))}
        </ul>
        <div>
          Subtotal:
          {' '}
          {totalPrice}
          $
        </div>
        <button type="button">Check out</button>
      </div>
    </div>
  );
}

export default Cart;
