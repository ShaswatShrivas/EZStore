import React from 'react';

export const Home = () => {
  return (
    <>
      <div className='home-container'>
        <h1>Welcome to Our E-Commerce Website</h1>
        <div className='abt-container'>
          <div className='about-text'>
            <h2>About Us</h2>
            <br />
            <h3>Welcome to the ultimate shopping experience! Discover a vast array of products, meticulously curated to cater to all your needs. Add items to your cart with ease and remove them just as swiftly. Your satisfaction is our top priority.</h3>
          </div>
          <a href="/products" className="button">
            <span>Explore</span>
          </a>
          <a href="/products" className='about-image'>
            <img src="https://cdn.pixabay.com/photo/2020/05/21/11/13/shopping-5200288_1280.jpg" alt="Shopping" />
          </a>
        </div>
      </div>
    </>
  );
}

export default Home;
