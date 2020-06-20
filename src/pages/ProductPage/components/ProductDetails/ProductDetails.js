import React, { useContext, useState, useEffect } from 'react';
import { SelectedProductContext, ReviewsContext } from '../../ProductContext';

import styles from './product-details.module.css';

// Components.
import Thumbnail from '../Thumbnail/Thumbnail';
import Reviews from '../Reviews/Reviews';
import EmptyContent from '../EmptyContent/EmptyContent';

const ProductDetails = () => {
  const { selectedProduct } = useContext(SelectedProductContext);

  const [reviews, setReviews] = useState([]);
  const reviewProvider = { reviews, setReviews };

  useEffect(() => {
    if (Object.keys(selectedProduct).length)
      setReviews(selectedProduct.reviews);
  }, [selectedProduct]);

  let ProductDetailsJsx;
  if (!Object.keys(selectedProduct).length) {
    ProductDetailsJsx = (
      <EmptyContent
        text="Please select product to show"
        color="#333"
        fontSize="1.25rem"
      />
    );
  } else {
    ProductDetailsJsx = (
      <article className={`${styles['product-details']} row align-items-start`}>
        <div className="col-md-4">
          <div
            className={`${styles['product-details__info']} d-flex justify-content-between align-items-center`}
          >
            <span className="product-details__name h5 mb-0">
              {selectedProduct.name}
            </span>
            <span
              className={`${styles['product-details__price']} font-weight-bold`}
            >
              {selectedProduct.price}$
            </span>
          </div>
          <p className={`${styles['product-details__description']} lead mt-4`}>
            {/* 
              This is static cause there is no description provided by api.
              So I added this for design purposes.
            */}
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt
            fugit dolorem ipsum enim, nobis ea architecto, eius voluptatibus
            officiis, expedita voluptate hic. Placeat sapiente ipsam natus
            soluta doloremque, illum ducimus.
          </p>
        </div>
        <div className="col-md-8">
          <Thumbnail pictures={selectedProduct.pictures} />
          <ReviewsContext.Provider value={reviewProvider}>
            <Reviews />
          </ReviewsContext.Provider>
        </div>
      </article>
    );
  }

  return ProductDetailsJsx;
};

export default ProductDetails;
