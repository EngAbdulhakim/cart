import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from './CartSlice';
import './App.css';

const products = [
  // Foliage Plants Category
  { id: 1, name: 'Fiddle Leaf Fig', price: 60, category: 'Foliage Plants', img: 'images/fiddle-leaf.jpg' },
  { id: 2, name: 'Monstera', price: 55, category: 'Foliage Plants', img: 'images/monstera.jpg' },
  { id: 3, name: 'Dracaena', price: 40, category: 'Foliage Plants', img: 'images/dracaena.jpg' },
  { id: 4, name: 'ZZ Plant', price: 45, category: 'Foliage Plants', img: 'images/zz.jpg' },
  { id: 5, name: 'Pothos', price: 30, category: 'Foliage Plants', img: 'images/pothos.jpg' },
  { id: 6, name: 'Peace Lily', price: 50, category: 'Foliage Plants', img: 'images/peace-lily.jpg' },
  // Succulents Category
  { id: 7, name: 'Round Cactus', price: 25, category: 'Succulents', img: 'images/round-cactus.jpg' },
  { id: 8, name: 'Aloe Vera', price: 20, category: 'Succulents', img: 'images/aloe.jpg' },
  { id: 9, name: 'Echeveria', price: 18, category: 'Succulents', img: 'images/echeveria.jpg' },
  { id: 10, name: 'Jade Plant', price: 22, category: 'Succulents', img: 'images/crassula.jpg' },
  { id: 11, name: 'Haworthia', price: 19, category: 'Succulents', img: 'images/haworthia.jpg' },
  { id: 12, name: 'Sedum', price: 17, category: 'Succulents', img: 'images/sedum.jpg' },
  // Flowering Plants Category
  { id: 13, name: 'Orchid', price: 80, category: 'Flowering Plants', img: 'images/orchid.jpg' },
  { id: 14, name: 'Anthurium', price: 70, category: 'Flowering Plants', img: 'images/anthurium.jpg' },
  { id: 15, name: 'Begonia', price: 35, category: 'Flowering Plants', img: 'images/begonia.jpg' },
  { id: 16, name: 'Camellia', price: 60, category: 'Flowering Plants', img: 'images/camellia.jpg' },
  { id: 17, name: 'Gardenia', price: 65, category: 'Flowering Plants', img: 'images/gardenia.jpg' },
  { id: 18, name: 'Hibiscus', price: 30, category: 'Flowering Plants', img: 'images/hibiscus.jpg' },
];

const categories = ['Foliage Plants', 'Succulents', 'Flowering Plants'];

const ProductList = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.items);
  const [added, setAdded] = useState([]);

  const handleAdd = (product) => {
    dispatch(addToCart(product));
    setAdded([...added, product.id]);
  };

  const getCartCount = () => cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div>
      <nav className="navbar">
        <a href="/">Home</a>
        <a href="/products">Plants</a>
        <a href="/cart">Cart <span className="cart-count">{getCartCount()}</span></a>
      </nav>
      <h2>Plant Listing</h2>
      {categories.map(cat => (
        <div key={cat}>
          <h3>{cat}</h3>
          <div className="product-list">
            {products.filter(p => p.category === cat).map(product => (
              <div className="product-card" key={product.id}>
                <img src={product.img} alt={product.name} className="product-img" />
                <h4>{product.name}</h4>
                <p>${product.price}</p>
                <button
                  disabled={added.includes(product.id)}
                  onClick={() => handleAdd(product)}
                >
                  {added.includes(product.id) ? 'Added to Cart' : 'Add to Cart'}
                </button>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
