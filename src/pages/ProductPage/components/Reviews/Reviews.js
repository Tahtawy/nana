/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, useContext } from 'react';
import { ReviewsContext } from '../../ProductContext';

import styles from './review.module.css';

// Components.
import Pagination from '../../../../shared/Pagination/Pagination';
import EmptyContent from '../../../../shared/EmptyContent/EmptyContent';

const REVIEWS_PER_PAGE = 2;

const Reviews = ({ children }) => {
  const { reviews, setReviews } = useContext(ReviewsContext);
  const [sortMethod, setSortMethod] = useState('');
  const [currentReviewPage, setCurrentReviewPage] = useState(1);
  const [totalItems, setTotalItems] = useState(reviews.length);
  const [pageStartIndex, setPageStartIndex] = useState(
    (currentReviewPage - 1) * REVIEWS_PER_PAGE,
  );
  const [pageEndIndex, setPageEndIndex] = useState(
    currentReviewPage * REVIEWS_PER_PAGE,
  );

  // On sort method change.
  useEffect(() => {
    if (!sortMethod) return;
    const reviewsCopy = [...reviews];
    const sortedReviews = reviewsCopy.sort((a, b) =>
      sortMethod === 'ASC' ? a.score - b.score : b.score - a.score,
    );
    setReviews(sortedReviews);
  }, [sortMethod]);

  // Reset current review page and total items each time new product load.
  useEffect(() => {
    setCurrentReviewPage(1);
  }, [reviews]);
  useEffect(() => {
    setTotalItems(reviews.length);
  }, [reviews.length]);

  // Reset page start and page end each time current page change.
  useEffect(() => {
    setPageStartIndex((currentReviewPage - 1) * REVIEWS_PER_PAGE);
  }, [currentReviewPage]);
  useEffect(() => {
    setPageEndIndex(currentReviewPage * REVIEWS_PER_PAGE);
  }, [currentReviewPage]);

  const handlePageChange = (page) => {
    setCurrentReviewPage(page);
  };

  let reviewsJsx;
  if (!reviews.length) {
    reviewsJsx = (
      <EmptyContent text="No reviews to show" color="#333" fontSize="1.25rem" />
    );
  } else {
    reviewsJsx = (
      <section className={`${styles.reviews}`}>
        <div className={`${styles.reviews__sort} row align-items-center`}>
          <span className="col-md-2">Sort reviews from: </span>
          <select
            className="custom-select col-md-5"
            value={sortMethod}
            onChange={(e) => setSortMethod(e.target.value)}
          >
            <option value="ASC">Low to high</option>
            <option value="DES">High to low</option>
          </select>
        </div>

        <ul className={`${styles.reviews__list} list-unstyled mt-4`}>
          {reviews.slice(pageStartIndex, pageEndIndex).map((review, index) => {
            return (
              <li className={`${styles.reviews__item} pb-2 mb-3`} key={index}>
                <div className="row align-items-center">
                  <div className="col-md-2">
                    <span
                      className={`${styles.reviews__rate} font-weight-bold`}
                    >
                      {review.score} of 5
                    </span>
                  </div>
                  <div className="col-md-10 pl-0">
                    <p className={`${styles.reviews__text} mb-0`}>
                      {review.review}
                    </p>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
        <Pagination
          totalItems={totalItems}
          perPage={REVIEWS_PER_PAGE}
          currentPage={currentReviewPage}
          onPageChange={(page) => {
            handlePageChange(page);
          }}
        />
      </section>
    );
  }

  return reviewsJsx;
};

Reviews.propTypes = {};

export default Reviews;
