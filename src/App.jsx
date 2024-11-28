import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Products from './components/Products';
import Cart from './components/Cart';
import "./App.css"
import { Home } from './components/Home';
import { Footer } from './components/Footer';

const App = () => {
    return (
        <Router>
          <div className='main-content'>

          
            <nav>
              <Link to='/'>Home</Link> |
                <Link to="/products">Products</Link> | <Link to="/cart">Cart</Link>
            </nav>
            <Routes>
              <Route path='/' element={<Home/>}/>
                <Route path="/products" element={<Products />} />
                <Route path="/cart" element={<Cart />} />
            </Routes>
            </div>
            <Footer/>
        </Router>
    );
};

export default App;
