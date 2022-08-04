import React from 'react';

function Item(props) {
  const { item, addToCart } = props;
  return (
    <div className="item">
      <img src={item.src} alt="product" />
      <div className="name">{item.title}</div>
      <div className="price">{item.price}</div>
      <div>
        <select id={item.id}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
        <button data-index={item.id} type="button" onClick={addToCart}>Add to cart</button>
      </div>
    </div>
  );
}

export default Item;
