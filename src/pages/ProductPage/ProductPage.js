import React, { useState } from 'react';
import { SelectedProductContext } from './ProductContext';

import styles from './product-page.module.css';

// Components.
import ProductList from './components/ProductList/ProductList';
import ProductDetails from './components/ProductDetails/ProductDetails';

function ProductPage() {
  const [selectedProduct, setSelectedProduct] = useState({});
  const providerData = { selectedProduct, setSelectedProduct };

  return (
    <div className={styles.products}>
      <div className="container-fluid">
        <SelectedProductContext.Provider value={providerData}>
          <ProductList />
          <ProductDetails />
        </SelectedProductContext.Provider>
      </div>
    </div>
  );
}

export default ProductPage;
