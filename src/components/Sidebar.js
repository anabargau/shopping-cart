import React from 'react';
import { Link } from 'react-router-dom';

function Sidebar() {
  return (
    <div className="sidebar">
      <ul className="sidebar-list">
        <Link to="all">
          <li>All</li>
        </Link>
        <Link to="feed">
          <li>Feed</li>
        </Link>
        <Link to="play">
          <li>Play</li>
        </Link>
        <Link to="clean">
          <li>Clean</li>
        </Link>
      </ul>
    </div>
  );
}

export default Sidebar;
