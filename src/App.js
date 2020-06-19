import React from 'react';
import './App.css';

// Components.
import ProductPage from './components/ProductPage/ProductPage';

function App() {
  return (
    <div className="App">
      <header className="header">
        <div className="container-fluid">
          <h4 className="mb-0">
            <i className="fa fa-shopping-bag"></i> Nice <span>Products</span>
          </h4>
        </div>
      </header>
      <ProductPage />
    </div>
  );
}

export default App;
