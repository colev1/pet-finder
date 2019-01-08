import ErrorPage from './ErrorPage'
import React from 'react'; 
import { shallow } from 'enzyme';


describe('error page', () => {
  let wrapper;
  it('should match the snapshot', () => {
     wrapper = shallow( <ErrorPage 
    />);
  })

  expect(wrapper).toMatchSnapshot(); 

})