import React from 'react';

import styles from './product-list.module.css';

const ProductList = () => {
  return (
    <article className={`${styles['product-list']} row mb-4`}>
      <div className="col-md-4">
        <div className={`${styles.product} card`}>
          <img
            className={`${styles['product-img']} card-img-top`}
            src={'http://picsum.photos/100/100/?image=109'}
            alt=""
          />
          <div
            className={`card-header d-flex justify-content-between align-items-center ${styles.product__header}`}
          >
            <div className="product__name-and-reviews">
              <h4 className="card-title mb-1">Product 1</h4>
              <span className={styles['product__total-reviews']}>
                1678 Review
              </span>
            </div>
            <span className={`${styles.product__price} font-weight-bold`}>
              180$
            </span>
          </div>
        </div>
      </div>

      <div className="col-md-4">
        <div className={`${styles.product} card`}>
          <img
            className={`${styles['product-img']} card-img-top`}
            src={'http://picsum.photos/100/100/?image=110'}
            alt=""
          />
          <div
            className={`card-header d-flex justify-content-between align-items-center ${styles.product__header}`}
          >
            <div className="product__name-and-reviews">
              <h4 className="card-title mb-1">Product 2</h4>
              <span className={styles['product__total-reviews']}>
                78 Review
              </span>
            </div>
            <span className={`${styles.product__price} font-weight-bold`}>
              80$
            </span>
          </div>
        </div>
      </div>

      <div className="col-md-4">
        <div className={`${styles.product} card`}>
          <img
            className={`${styles['product-img']} card-img-top`}
            src={'http://picsum.photos/100/100/?image=112'}
            alt=""
          />
          <div
            className={`card-header d-flex justify-content-between align-items-center ${styles.product__header}`}
          >
            <div className="product__name-and-reviews">
              <h4 className="card-title mb-1">Product 3</h4>
              <span className={styles['product__total-reviews']}>
                678 Review
              </span>
            </div>
            <span className={`${styles.product__price} font-weight-bold`}>
              300$
            </span>
          </div>
        </div>
      </div>
    </article>
  );
};

export default React.memo(ProductList);
