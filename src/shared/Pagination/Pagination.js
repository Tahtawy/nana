/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import styles from './pagination.module.css';

const Pagination = ({
  totalItems,
  perPage,
  currentPage,
  onPageChange,
  children,
}) => {
  const [pageCount, setPageCount] = useState(0);
  useEffect(() => {
    setPageCount(Math.ceil(+totalItems / +perPage));
  }, [totalItems]);

  const [pageNumber, setPageNumber] = useState(1);
  useEffect(() => {
    setPageNumber(currentPage);
  }, [currentPage]);

  return (
    <section
      className={`${styles.review__pagination} d-flex justify-content-center`}
    >
      <ul className="pagination">
        <li
          className={`${pageNumber <= 1 ? 'disabled' : ''} page-item`}
          onClick={() => onPageChange(pageNumber - 1)}
        >
          <a className="page-link" href="#!" tabIndex="-1">
            Previous
          </a>
        </li>
        {[...Array(pageCount)].map((count, index) => {
          return (
            <li
              className={`${
                pageNumber === index + 1 ? 'active' : ''
              } page-item`}
              key={index}
              onClick={() => onPageChange(index + 1)}
            >
              <a className="page-link" href="#!">
                {index + 1}
              </a>
            </li>
          );
        })}
        <li
          className={`${
            pageNumber > pageCount - 1 ? 'disabled' : ''
          } page-item`}
          onClick={() => onPageChange(pageNumber + 1)}
        >
          <a className="page-link" href="#!">
            Next
          </a>
        </li>
      </ul>
    </section>
  );
};

Pagination.propTypes = {
  totalItems: PropTypes.oneOfType([
    PropTypes.string.isRequired,
    PropTypes.number.isRequired,
  ]),
  perPage: PropTypes.oneOfType([
    PropTypes.string.isRequired,
    PropTypes.number.isRequired,
  ]),
  onPageChange: PropTypes.func,
};

export default Pagination;
