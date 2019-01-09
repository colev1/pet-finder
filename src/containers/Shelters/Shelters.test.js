import { shallow } from 'enzyme'
import React from 'react'
import Shelters, {mapStateToProps} from './Shelters'

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

describe('map state to props', () => {
  it('returns an object with all keys', () => {
    const mockState = {
      searchedShelters: [{ name: 'shelter', city: 'San Fran' },
        { name: 'shelter 2', city: 'Denver' }],
      isLoadingShelters: false,
      hasErrored: 'Error!!',
    };
    const expected = {
      searchedShelters: mockState.searchedShelters,
      isLoadingShelters: mockState.isLoadingShelters,
      hasErrored: mockState.hasErrored,
    };
    const result = mapStateToProps(mockState);
    expect(result).toEqual(expected);
  });
});

