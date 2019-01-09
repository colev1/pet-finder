import React from 'react'
import { shallow } from 'enzyme'
import ErrorPage from './ErrorPage'

describe('error page', () => {
  let wrapper;
  it('should match the snapshot', () => {
    wrapper = shallow(<ErrorPage
    />);
  });
  expect(wrapper).toMatchSnapshot();
});
