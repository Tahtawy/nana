import React from 'react';

const SelectedProductContext = React.createContext({
  selectedProduct: {},
  setSelectedProduct: () => {},
});

const ReviewsContext = React.createContext({
  reviews: [],
  setReviews: () => {},
});

export { SelectedProductContext, ReviewsContext };
