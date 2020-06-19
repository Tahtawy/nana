import React from 'react';

import styles from './thumbnail.module.css';

const Thumbnail = () => {
  return (
    <section className={`${styles.thumbnail}`}>
      <div className={`${styles['thumbnail__main-view']} mb-3`}>
        <img
          className="w-100 h-100"
          src="http://picsum.photos/1015/1015/?image=37"
          alt=""
        />
      </div>
      <div className={`${styles['thumbnail__list']}`}>
        <div className="">
          <img
            className="w-100"
            src="http://picsum.photos/100/100/?image=37"
            alt=""
          />
        </div>
        <div className="">
          <img
            className="w-100"
            src="http://picsum.photos/100/100/?image=38"
            alt=""
          />
        </div>
        <div className="">
          <img
            className="w-100"
            src="http://picsum.photos/1015/1015/?image=39"
            alt=""
          />
        </div>
        <div className="">
          <img
            className="w-100"
            src="http://picsum.photos/1015/1015/?image=42"
            alt=""
          />
        </div>
        <div className="">
          <img
            className="w-100"
            src="http://picsum.photos/1015/1015/?image=55"
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default React.memo(Thumbnail);
