const productsFixtures = [
  {
    id: 37681,
    name: 'Product 1',
    totalReviews: 1678,
    price: 180,
    photo: 'http://picsum.photos/100/100/?image=109',
  },
];

const singleProductFixture = {
  id: 18671,
  name: 'Product 2',
  reviews: [
    {
      review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      score: 5,
    },
    {
      review:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Enim tortor at auctor urna. Mattis vulputate enim nulla aliquet porttitor.',
      score: 4.9,
    },
    {
      review:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Et magnis dis parturient montes nascetur ridiculus. Dictum varius duis at consectetur lorem donec.',
      score: 4.6,
    },
    {
      review:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id venenatis a condimentum vitae sapien pellentesque habitant morbi.',
      score: 4.7,
    },
    {
      review:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id venenatis a condimentum vitae sapien pellentesque habitant morbi.',
      score: 4.7,
    },
    {
      review:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id venenatis a condimentum vitae sapien pellentesque habitant morbi.',
      score: 4.7,
    },
  ],
  pictures: [
    {
      thumbnail: 'http://picsum.photos/100/100/?image=28',
      photo: 'http://picsum.photos/1015/1015/?image=28',
    },
    {
      thumbnail: 'http://picsum.photos/100/100/?image=29',
      photo: 'http://picsum.photos/1015/1015/?image=29',
    },
    {
      thumbnail: 'http://picsum.photos/100/100/?image=30',
      photo: 'http://picsum.photos/1015/1015/?image=30',
    },
    {
      thumbnail: 'http://picsum.photos/100/100/?image=33',
      photo: 'http://picsum.photos/1015/1015/?image=33',
    },
    {
      thumbnail: 'http://picsum.photos/100/100/?image=35',
      photo: 'http://picsum.photos/1015/1015/?image=35',
    },
  ],
};

export { productsFixtures, singleProductFixture };
