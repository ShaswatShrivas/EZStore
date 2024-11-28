import React from 'react';

export const Footer = () => {
  return (
    <div className='footer-container'>
      <p>Copyright 2024</p>
      <p>All Rights Reserved</p>
      <ul className="footer-links">
        <li><a href="/">Home</a></li>
        <li><a href="/products">Products</a></li>
        <li><a href="/cart">Cart</a></li>
      </ul>
    </div>
  );
}

export default Footer;
