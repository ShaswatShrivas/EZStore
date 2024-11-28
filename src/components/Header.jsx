import React from 'react';

export const Header = () => {
  return (
    <>
      <div className="header">
        <ul className="nav-links">
          <li><a href="/">Home</a></li>
          <li><a href="products">Products</a></li>
          <li><a href="/cart">Cart</a></li>
        </ul>
      </div>
    </>
  )
}
