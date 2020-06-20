import React from 'react';
import './App.css';

// Components.
import Header from './shared/Header/Header';
import ProductPage from './pages/ProductPage/ProductPage';

function App() {
  return (
    <div className="App">
      <Header />
      <ProductPage />
    </div>
  );
}

export default App;
