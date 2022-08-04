import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Sidebar from './Sidebar';
import Clean from './Clean';
import Feed from './Feed';
import Play from './Play';
import All from './All';

function Shop(props) {
  const { addToCart } = props;
  return (
    <div className="shop">
      <Sidebar />
      <Routes>
        <Route index path="all" element={<All addToCart={addToCart} />} />
        <Route path="feed" element={<Feed addToCart={addToCart} />} />
        <Route path="clean" element={<Clean addToCart={addToCart} />} />
        <Route path="play" element={<Play addToCart={addToCart} />} />
      </Routes>
    </div>
  );
}

export default Shop;
