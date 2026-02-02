import React from 'react';
import './App.css';

const App = () => (
  <div className="landing">
    <h1>Paradise Nursery</h1>
    <p>The most beautiful houseplants at your fingertips</p>
    <button className="button-start" onClick={() => window.location.href = '/products'}>
      Get Started
    </button>
  </div>
);

export default App;
