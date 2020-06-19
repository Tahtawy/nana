import React from 'react';

import styles from './product-page.module.css';

// Components.
import ProductList from '../ProductList/ProductList';
import ProductDetails from '../ProductDetails/ProductDetails';

function ProductPage() {
  return (
    <div className={styles.products}>
      <div className="container-fluid">
        <ProductList />
        <ProductDetails />
      </div>
    </div>
  );
}

export default ProductPage;
