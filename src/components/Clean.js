import React from 'react';
import Item from './Item';
import allProducts from './images/all';

function Clean(props) {
  const { addToCart } = props;
  const clean = allProducts.filter((item) => item.type === 'clean');
  return (
    <div className="item-grid">
      {clean.map((item) => <Item item={item} key={item.id} addToCart={addToCart} />)}
    </div>
  );
}

export default Clean;
