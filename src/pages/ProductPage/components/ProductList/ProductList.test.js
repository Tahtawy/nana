import { fetchProducts } from '../../../../services/Product.service';
import { productsFixtures } from '../../../../fixtures/products';

it('ensures that product fetches successfully and called once', async () => {
  fetch.mockResponseOnce(JSON.stringify(productsFixtures));

  const products = await fetchProducts();

  expect(products).toEqual(productsFixtures);
  expect(fetch).toHaveBeenCalledTimes(1);
});
