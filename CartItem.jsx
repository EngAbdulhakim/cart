import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart, increaseQuantity, decreaseQuantity } from './CartSlice';
import './App.css';

const CartItem = () => {
  const dispatch = useDispatch();
  const items = useSelector(state => state.cart.items);

  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div>
      <nav className="navbar">
        <a href="/">Home</a>
        <a href="/products">Plants</a>
        <a href="/cart">Cart <span className="cart-count">{items.reduce((sum, item) => sum + item.quantity, 0)}</span></a>
      </nav>
      <h2>Shopping Cart</h2>
      {items.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div>
          {items.map(item => (
            <div className="cart-item" key={item.id}>
              <img src={item.img} alt={item.name} className="product-img" />
              <h4>{item.name}</h4>
              <p>Unit Price: ${item.price}</p>
              <p>Quantity: {item.quantity}</p>
              <p>Total Cost: ${item.price * item.quantity}</p>
              <button onClick={() => dispatch(increaseQuantity(item.id))}>+</button>
              <button onClick={() => dispatch(decreaseQuantity(item.id))} disabled={item.quantity === 1}>-</button>
              <button onClick={() => dispatch(removeFromCart(item.id))}>Delete</button>
            </div>
          ))}
          <h3>Total Cart Amount: ${total}</h3>
          <button disabled>Checkout (Coming Soon)</button>
          <a href="/products">
            <button>Continue Shopping</button>
          </a>
        </div>
      )}
    </div>
  );
};

export default CartItem;
