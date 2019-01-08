import Shelters, {mapStateToProps} from './Shelters'
import { shallow, mount } from 'enzyme';
import React from 'react'

describe('shelters', () => {
  let wrapper;
  let mockSearchedShelters;
  it('should match the snapshot with all data passed in correctly', () => {
    mockSearchedShelters = ['shelter1']
     wrapper = shallow( <Shelters 
      searchedShelters= {mockSearchedShelters}
      isLoadingShelters = {false}
      fetchSearchedShelters = {jest.fn()}
    />);
  })

  expect(wrapper).toMatchSnapshot(); 

})