import React, { useState } from 'react';
import './App.css';
import ProductList from './ProductList';

const App = () => {
  const [showProductList, setShowProductList] = useState(false);

  const handleGetStarted = () => {
    setShowProductList(true);
  };

  return (
    <div className="background-image">
      {!showProductList ? (
        <div className="landing">
          <h1>Welcome to Paradise Nursery</h1>
          <p>The most beautiful houseplants at your fingertips</p>
          <button className="button-start" onClick={handleGetStarted}>
            Get Started
          </button>
        </div>
      ) : (
        <ProductList />
      )}
    </div>
  );
};

export default App;
