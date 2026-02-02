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
        <a href="/">الرئيسية</a>
        <a href="/products">النباتات</a>
        <a href="/cart">العربة <span className="cart-count">{items.reduce((sum, item) => sum + item.quantity, 0)}</span></a>
      </nav>
      <h2>عربة التسوق</h2>
      {items.length === 0 ? (
        <p>العربة فارغة</p>
      ) : (
        <div>
          {items.map(item => (
            <div className="cart-item" key={item.id}>
              <img src={item.img} alt={item.name} className="product-img" />
              <h4>{item.name}</h4>
              <p>سعر الوحدة: {item.price} ريال</p>
              <p>الكمية: {item.quantity}</p>
              <p>الإجمالي: {item.price * item.quantity} ريال</p>
              <button onClick={() => dispatch(increaseQuantity(item.id))}>+</button>
              <button onClick={() => dispatch(decreaseQuantity(item.id))} disabled={item.quantity === 1}>-</button>
              <button onClick={() => dispatch(removeFromCart(item.id))}>حذف</button>
            </div>
          ))}
          <h3>المجموع الكلي: {total} ريال</h3>
          <button disabled>إنهاء الشراء (قريباً)</button>
          <a href="/products">
            <button>استمر في التسوق</button>
          </a>
        </div>
      )}
    </div>
  );
};

export default CartItem;
