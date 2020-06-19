import React from 'react';

import styles from './product-details.module.css';

// Components.
import Thumbnail from '../Thumbnail/Thumbnail';
import Reviews from '../Reviews/Reviews';

const ProductDetails = () => {
  return (
    <article className={`${styles['product-details']} row align-items-start`}>
      <div className="col-md-4">
        <div
          className={`${styles['product-details__info']} d-flex justify-content-between align-items-center`}
        >
          <span className="product-details__name h5 mb-0">Product 1</span>
          <span
            className={`${styles['product-details__price']} font-weight-bold`}
          >
            180$
          </span>
        </div>
        <p className={`${styles['product-details__description']} lead mt-4`}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt
          fugit dolorem ipsum enim, nobis ea architecto, eius voluptatibus
          officiis, expedita voluptate hic. Placeat sapiente ipsam natus soluta
          doloremque, illum ducimus.
        </p>
      </div>
      <div className="col-md-8">
        <Thumbnail />
        <Reviews />
      </div>
    </article>
  );
};

export default React.memo(ProductDetails);
