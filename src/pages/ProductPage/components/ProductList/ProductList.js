import React, { useState, useEffect, useContext } from 'react';
import { SelectedProductContext } from '../../ProductContext';

import styles from './product-list.module.css';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/products`);
      const productsData = await response.json();
      setProducts(productsData);
    };
    fetchProducts();
  }, []);

  const [selectedProductId, setSelectedProductId] = useState(null);
  /**
   * I make this because '/productDetails' API doesn't have price;
   */
  const [selectedProductPrice, setSelectedProductPrice] = useState(null);
  const { setSelectedProduct } = useContext(SelectedProductContext);

  useEffect(() => {
    const fetchSingleProduct = async () => {
      if (!selectedProductId) return;

      const response = await fetch(
        `${process.env.REACT_APP_API_URL}/productDetails/${selectedProductId}`,
      );
      const data = await response.json();
      setSelectedProduct({ price: selectedProductPrice, ...data });
    };
    fetchSingleProduct();
  }, [selectedProductId]);

  return (
    <article className={`${styles['product-list']} row mb-4`}>
      {products.map((product) => (
        <div
          key={product.id}
          className="col-md-4"
          onClick={() => {
            setSelectedProductPrice(product.price);
            setSelectedProductId(product.id);
          }}
        >
          <div className={`${styles.product} card`}>
            <img
              className={`${styles['product-img']} card-img-top`}
              src={product.photo}
              alt=""
            />
            <div
              className={`card-header d-flex justify-content-between align-items-center ${styles.product__header}`}
            >
              <div className="product__name-and-reviews">
                <h4 className="card-title mb-1">{product.name}</h4>
                <span className={styles['product__total-reviews']}>
                  {product.totalReviews} Review
                </span>
              </div>
              <span className={`${styles.product__price} font-weight-bold`}>
                {product.price}$
              </span>
            </div>
          </div>
        </div>
      ))}
    </article>
  );
};

export default ProductList;
