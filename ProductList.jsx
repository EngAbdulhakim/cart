import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from './CartSlice';
import './App.css';

const products = [
  // فئة النباتات الورقية
  { id: 1, name: 'فيكس ليراتا', price: 60, category: 'النباتات الورقية', img: 'images/fiddle-leaf.jpg' },
  { id: 2, name: 'مونستيرا', price: 55, category: 'النباتات الورقية', img: 'images/monstera.jpg' },
  { id: 3, name: 'دراسينا', price: 40, category: 'النباتات الورقية', img: 'images/dracaena.jpg' },
  { id: 4, name: 'زاميفوليا', price: 45, category: 'النباتات الورقية', img: 'images/zz.jpg' },
  { id: 5, name: 'بوتس', price: 30, category: 'النباتات الورقية', img: 'images/pothos.jpg' },
  { id: 6, name: 'سباثيفيلوم', price: 50, category: 'النباتات الورقية', img: 'images/peace-lily.jpg' },
  // فئة العصاريات
  { id: 7, name: 'صبار كروي', price: 25, category: 'العصاريات', img: 'images/round-cactus.jpg' },
  { id: 8, name: 'ألوفيرا', price: 20, category: 'العصاريات', img: 'images/aloe.jpg' },
  { id: 9, name: 'إشيفيريا', price: 18, category: 'العصاريات', img: 'images/echeveria.jpg' },
  { id: 10, name: 'كراسولا', price: 22, category: 'العصاريات', img: 'images/crassula.jpg' },
  { id: 11, name: 'هاورثيا', price: 19, category: 'العصاريات', img: 'images/haworthia.jpg' },
  { id: 12, name: 'سيدوم', price: 17, category: 'العصاريات', img: 'images/sedum.jpg' },
  // فئة النباتات المزهرة
  { id: 13, name: 'أوركيد', price: 80, category: 'النباتات المزهرة', img: 'images/orchid.jpg' },
  { id: 14, name: 'أنثوريوم', price: 70, category: 'النباتات المزهرة', img: 'images/anthurium.jpg' },
  { id: 15, name: 'بيجونيا', price: 35, category: 'النباتات المزهرة', img: 'images/begonia.jpg' },
  { id: 16, name: 'كاميليا', price: 60, category: 'النباتات المزهرة', img: 'images/camellia.jpg' },
  { id: 17, name: 'جاردينيا', price: 65, category: 'النباتات المزهرة', img: 'images/gardenia.jpg' },
  { id: 18, name: 'هيبسكس', price: 30, category: 'النباتات المزهرة', img: 'images/hibiscus.jpg' },
];

const categories = ['النباتات الورقية', 'العصاريات', 'النباتات المزهرة'];

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
        <a href="/">الرئيسية</a>
        <a href="/products">النباتات</a>
        <a href="/cart">العربة <span className="cart-count">{getCartCount()}</span></a>
      </nav>
      <h2>قائمة النباتات</h2>
      {categories.map(cat => (
        <div key={cat}>
          <h3>{cat}</h3>
          <div className="product-list">
            {products.filter(p => p.category === cat).map(product => (
              <div className="product-card" key={product.id}>
                <img src={product.img} alt={product.name} className="product-img" />
                <h4>{product.name}</h4>
                <p>{product.price} ريال</p>
                <button
                  disabled={added.includes(product.id)}
                  onClick={() => handleAdd(product)}
                >
                  {added.includes(product.id) ? 'تمت الإضافة' : 'أضف إلى العربة'}
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
