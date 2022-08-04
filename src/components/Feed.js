import React from 'react';
import allProducts from './images/all';
import Item from './Item';

function Feed(props) {
  const { addToCart } = props;
  const food = allProducts.filter((item) => item.type === 'food');
  return (
    <div className="item-grid">
      {food.map((item) => <Item item={item} key={item.id} addToCart={addToCart} />)}
    </div>
  );
}

export default Feed;
