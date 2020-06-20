import { fetchProductById } from '../../../../services/Product.service';
import { singleProductFixture } from '../../../../fixtures/products';

it('ensures that product details fetches successfully and called once', async () => {
  fetch.mockResponseOnce(JSON.stringify(singleProductFixture));

  const singleProduct = await fetchProductById(18671);

  expect(singleProduct).toEqual(singleProductFixture);
  expect(fetch).toHaveBeenCalledTimes(1);
});
