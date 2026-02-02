import React from 'react';
import './App.css';

const App = () => (
  <div className="landing">
    <h1>جنة الحضانة</h1>
    <p>أجمل النباتات المنزلية بين يديك</p>
    <button className="button-start" onClick={() => window.location.href = '/products'}>
      ابدأ الآن
    </button>
  </div>
);

export default App;
