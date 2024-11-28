import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increaseQuantity, decreaseQuantity, removeFromCart } from '../redux/actions/cartActions';

const Cart = () => {
    const dispatch = useDispatch();
    const cart = useSelector(state => state.cartReducer.cart);
    
    const count = useSelector(state =>
        state.cartReducer.cart.reduce((acc, item) => acc + item.quantity, 0)
    );

    const handleSubmission = () => {
        if (cart.length > 0) {
            alert("Order Placed! Thank you for Purchasing");
            cart.forEach(item => {
                dispatch(removeFromCart(item.id));
            });
        }
    };

    return (
        <div className='cart-container'>
            <h1>Total Products: {count} </h1>
            {cart.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <>
                    {cart.map(item => (
                        <div className='cart-item' key={item.id}>
                            <h2>{item.name}</h2>
                            <p>{item.description}</p>
                            <p>Quantity: {item.quantity}</p>
                            <div className='cart-buttons'>
                                <button id='add' onClick={() => dispatch(increaseQuantity(item.id))}>+</button>
                                <button id='subtract' onClick={() => dispatch(decreaseQuantity(item.id))}>-</button>
                                <button onClick={() => dispatch(removeFromCart(item.id))}>Remove</button>
                            </div>
                        </div>
                    ))}
                    <button onClick={handleSubmission} className='custom-button'>
                        Confirm your order
                        <svg
                            viewBox="0 0 16 19"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z"
                            ></path>
                        </svg>
                    </button>
                </>
            )}
        </div>
    );
};

export default Cart;
