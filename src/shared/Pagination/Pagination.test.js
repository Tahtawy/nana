import React from 'react';
import { mount } from 'enzyme';
import Pagination from './Pagination';

describe('<Pagination />', () => {
  it('ensures that pagination has correct props', () => {
    const pagination = mount(<Pagination totalItems="6" perPage="2" />);

    expect(pagination.props().totalItems).toBe('6');
    expect(pagination.props().perPage).toBe('2');
  });
});
