import React from 'react';

const Header = () => {
  return (
    <header className="header">
      <div className="container-fluid">
        <h4 className="mb-0">
          <i className="fa fa-shopping-bag"></i> Nice <span>Products</span>
        </h4>
      </div>
    </header>
  );
};

export default React.memo(Header);
