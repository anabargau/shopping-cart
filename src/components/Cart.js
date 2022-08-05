import React from 'react';
import uniqid from 'uniqid';
import CartIcon from './icons/cart.png';

function Cart(props) {
  const { cart, removeFromCart } = props;
  let productsNum = 0;
  let totalPrice = 0;
  cart.forEach((item) => {
    productsNum += item.quantity;
    totalPrice += item.quantity * parseInt(item.item.price[0] + item.item.price[1]);
  });
  function dropdownClick() {
    const elem = document.getElementById('cart-content');
    elem.classList.toggle('show');
  }
  return (
    <div>
      <div id="cart">
        <button type="button" className="dropdown" onClick={dropdownClick}>
          <img className="cart-icon" src={CartIcon} alt="cart icon" />
          {' '}
          (
          {productsNum}
          )
        </button>
        <div className="cart-content" id="cart-content">
          <ul className="item-list">
            {cart.map((item) => (
              <li className="cart-item" key={uniqid()}>
                <div className="item-title">{item.item.title}</div>
                <div className="item-price">{item.item.price}</div>
                <div className="item-quantity">{item.quantity}</div>
                <button className="delete-item" data-index={item.item.id} type="button" onClick={removeFromCart}>X</button>
              </li>
            ))}
          </ul>
          {cart.length === 0 ? <div>You have no items yet :(</div> : null}
          <div className="subtotal">
            Subtotal:
            {' '}
            {totalPrice}
            $
          </div>
          <button type="button" className="checkout">Check out</button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
