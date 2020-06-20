import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import styles from './thumbnail.module.css';

// Components.
import EmptyContent from '../EmptyContent/EmptyContent';

const Thumbnail = ({ pictures, children }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  useEffect(() => {
    setCurrentImageIndex(0);
  }, [pictures]);

  let thumbnailJsx;
  if (!pictures.length)
    thumbnailJsx = (
      <EmptyContent text="No images to show" color="#333" fontSize="1.25rem" />
    );
  else {
    thumbnailJsx = (
      <section className={`${styles.thumbnail}`}>
        <div className={`${styles['thumbnail__main-view']} mb-3`}>
          <img
            className="w-100 h-100"
            src={pictures[currentImageIndex].photo}
            alt=""
          />
        </div>
        <div className={`${styles['thumbnail__list']}`}>
          {pictures.map((picture, index) => {
            return (
              <div key={index} onClick={() => setCurrentImageIndex(index)}>
                <img
                  className="w-100"
                  src={picture.thumbnail}
                  alt={`thumbnail_${index}`}
                />
              </div>
            );
          })}
        </div>
      </section>
    );
  }

  return thumbnailJsx;
};

Thumbnail.propTypes = {
  pictures: PropTypes.array,
};

Thumbnail.defaultProps = {
  pictures: [],
};

export default Thumbnail;
