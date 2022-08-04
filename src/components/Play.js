import React from 'react';
import allProducts from './images/all';
import Item from './Item';

function Play(props) {
  const { addToCart } = props;
  const toy = allProducts.filter((item) => item.type === 'toy');
  return (
    <div className="item-grid">
      {toy.map((item) => <Item item={item} key={item.id} addToCart={addToCart} />)}
    </div>
  );
}

export default Play;
