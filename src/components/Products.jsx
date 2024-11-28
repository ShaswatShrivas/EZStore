import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../redux/actions/cartActions';

const products = [
    { id: 1, name: 'TechBlitz Alpha Smartphone', description: 'A powerful smartphone with high-end specifications.', img: 'https://via.placeholder.com/220' },
    { id: 2, name: 'SleekBook Pro Laptop', description: 'A high-performance laptop with a 4K display.', img: 'https://via.placeholder.com/220' },
    { id: 3, name: 'EcoPhone Green Smartphone', description: 'An eco-friendly smartphone with efficient performance.', img: 'https://via.placeholder.com/220' },
    { id: 4, name: 'GameMaster Xtreme Laptop', description: 'A gaming laptop with top-tier graphics and storage.', img: 'https://via.placeholder.com/220' },
    { id: 5, name: 'ZoomerX Smartphone', description: 'A sleek smartphone with impressive camera capabilities.', img: 'https://via.placeholder.com/220' },
    { id: 6, name: 'UltraSlimPad Laptop', description: 'A compact and lightweight laptop for everyday use.', img: 'https://via.placeholder.com/220' },
    { id: 7, name: 'PowerMax Smartphone', description: 'A high-performance smartphone with a large battery.', img: 'https://via.placeholder.com/220' },
    { id: 8, name: 'FlexiBook Convertible Laptop', description: 'A versatile 2-in-1 laptop with a touchscreen.', img: 'https://via.placeholder.com/220' },
    { id: 9, name: 'FusionPhone S Smartphone', description: 'A stylish smartphone with HDR display.', img: 'https://via.placeholder.com/220' },
    { id: 10, name: 'GigaBook Creator Laptop', description: 'A powerful laptop for creators with dual storage options.', img: 'https://via.placeholder.com/220' }
];

const Products = () => {
    const dispatch = useDispatch();
    const count = useSelector(state =>
        state.cartReducer.cart.reduce((acc, item) => acc + item.quantity, 0)
    );

    const handleAddToCart = (product) => {
        dispatch(addToCart(product));
    };

    return (
        <div className='products-container'>
            <h1 className='product-header'>Products</h1>
            <h2>Products in Cart: {count}</h2>
            <div className='products'>
                {products.map(product => (
                    <div className='product' key={product.id}>
                        <h2>{product.name}</h2>
                        <p>{product.description}</p>
                        <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Products;
