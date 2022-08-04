import React from 'react';
import Item from './Item';
import allProducts from './images/all';

function All(props) {
  const { addToCart, removeFromCart } = props;
  return (
    <div className="item-grid">
      {allProducts.map((item) => <Item item={item} key={item.id} addToCart={addToCart} removeFromCart={removeFromCart} />)}
    </div>
  );
}

export default All;
