import { shallow } from 'enzyme'
import React from 'react'
import Shelters from './Shelters'

describe('shelters', () => {
  let wrapper;
  let mockSearchedShelters;
  it('should match the snapshot with all data passed in correctly', () => {
    mockSearchedShelters = ['shelter1'];
    wrapper = shallow(<Shelters
      searchedShelters={mockSearchedShelters}
      isLoadingShelters={false}
      fetchSearchedShelters={jest.fn()}
    />);
  });

  expect(wrapper).toMatchSnapshot();
});
