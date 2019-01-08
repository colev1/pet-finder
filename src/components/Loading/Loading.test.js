import {Loading} from './Loading'
import React from 'react'; 
import { shallow, mount } from 'enzyme';


describe('loading', () => {
  let wrapper;
  it('should match the snapshot with all data passed in correctly', () => {
     wrapper = shallow( <Loading 
    />);
  })

  expect(wrapper).toMatchSnapshot(); 

})