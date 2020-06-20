import React from 'react';
import PropTypes from 'prop-types';

import styles from './empty-content.module.css';

const EmptyContent = ({ text, fontSize, color, children }) => {
  const emptyContentStyle = {
    fontSize,
    color,
  };
  return (
    <div className={`${styles['empty-content']} w-100 p-4 text-center`}>
      <p style={emptyContentStyle}>{text}</p>
    </div>
  );
};

EmptyContent.propTypes = {
  text: PropTypes.string,
  fontSize: PropTypes.string,
  color: PropTypes.string,
};

export default React.memo(EmptyContent);
