import React from 'react';

import styles from './review.module.css';

// Components.
import Pagination from '../Pagination/Pagination';

const Reviews = () => {
  return (
    <section className={`${styles.reviews}`}>
      <div className={`${styles.reviews__sort} row align-items-center`}>
        <span className="col-md-2">Sort reviews from: </span>
        <select class="custom-select col-md-5">
          <option value="1">High to low</option>
          <option value="2">Low to high</option>
        </select>
      </div>
      <ul className={`${styles.reviews__list} list-unstyled mt-4`}>
        <li className={`${styles.reviews__item} pb-2 mb-3`}>
          <div className="row align-items-center">
            <div className="col-md-2">
              <span className={`${styles.reviews__rate} font-weight-bold`}>
                4 of 5
              </span>
            </div>
            <div className="col-md-10 pl-0">
              <p className={`${styles.reviews__text} mb-0`}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt,
                error tenetur. Magnam at, officia eaque animi inventore est
                laboriosam? Autem, et. Deserunt, ducimus. Consequuntur provident
                nemo ullam sunt architecto! Ratione.
              </p>
            </div>
          </div>
        </li>
        <li className={`${styles.reviews__item} pb-2 mb-3`}>
          <div className="row align-items-center">
            <div className="col-md-2">
              <span className={`${styles.reviews__rate} font-weight-bold`}>
                4 of 5
              </span>
            </div>
            <div className="col-md-10 pl-0">
              <p className={`${styles.reviews__text} mb-0`}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt,
                error tenetur. Magnam at, officia eaque animi inventore est
                laboriosam? Autem, et. Deserunt, ducimus. Consequuntur provident
                nemo ullam sunt architecto! Ratione.
              </p>
            </div>
          </div>
        </li>
      </ul>
      <Pagination />
    </section>
  );
};

export default React.memo(Reviews);
