import React from 'react'
import { shallow } from 'enzyme'
import {Loading} from './Loading'


describe('loading', () => {
  let wrapper;
  it('should match the snapshot with all data passed in correctly', () => {
    wrapper = shallow(<Loading
    />);
  });

  expect(wrapper).toMatchSnapshot();

});
