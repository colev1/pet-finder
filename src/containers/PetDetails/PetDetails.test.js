import { shallow } from 'enzyme'
import React from 'react'
import PetDetails, { mapStateToProps } from './PetDetails'


describe('pet details', () => {
  it('should match the snapshot with all data passed in correctly', () => {
    const mockSelected = { name: 'fido', animal: 'dog' }
    const mockIsLoading = false;
    const mockFetchSelected = jest.fn();

    const wrapper = shallow(<PetDetails
      selectedPet={mockSelected}
      isLoadingSelected={mockIsLoading}
      fetchSelectedPet={mockFetchSelected}
    />);
    expect(wrapper).toMatchSnapshot()
  });
});

describe('map state to props', () => {
  it('returns an object with correct keys', () => {
    const mockState = {
      selectedPet: { name: 'Fido', animal: 'dog' },
      isLoadingSelected: true,
    };

    const expected = { selectedPet: mockState.selectedPet, isLoadingSelected: mockState.isLoadingSelected };

    const result = mapStateToProps(mockState);
    expect(result).toEqual(expected);
  });
});
