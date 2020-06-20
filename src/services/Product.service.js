const fetchProducts = async () => {
  const response = await fetch(`${process.env.REACT_APP_API_URL}/products`);
  const productsData = await response.json();
  return productsData;
};

const fetchProductById = async (productId) => {
  const response = await fetch(
    `${process.env.REACT_APP_API_URL}/productDetails/${productId}`,
  );
  const data = await response.json();
  return data;
};

export { fetchProducts, fetchProductById };
