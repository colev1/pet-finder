import { shallow } from 'enzyme';
import React from 'react';
import { Home } from './Home';


describe('Home', () => {
  let wrapper;
  it('should match the snapshot with all data passed in correctly', () => {
    wrapper = shallow(
       <Home
    />
);
  });

  expect(wrapper).toMatchSnapshot();

});
