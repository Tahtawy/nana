import React from 'react';
import { shallow } from 'enzyme';
import Header from './Header';

it('ensures that brand is correct', () => {
  const wrapper = shallow(<Header />);
  const h4 = wrapper.find('h4');
  const brandIcon = h4.find('i');
  const h4TextNode = h4.text();

  expect(h4TextNode).toBe(' Nice Products');
  expect(brandIcon.hasClass('fa fa-shopping-bag')).toBe(true);
});
