import {Home} from './Home'
import { shallow, mount } from 'enzyme';
import React from 'react'


describe('Home', () => {
  let wrapper;
  it('should match the snapshot with all data passed in correctly', () => {
     wrapper = shallow( <Home 
    />);
  })

  expect(wrapper).toMatchSnapshot(); 

})