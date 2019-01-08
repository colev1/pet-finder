import PetDetails, { mapStateToProps } from './PetDetails'
import { shallow, mount } from 'enzyme';
import React from 'react'


describe('pet details', () => {
  

  it('should match the snapshot with all data passed in correctly', () => {
  let mockSelected = {name: 'fido', animal: 'dog'};
  let mockIsLoading = false;
  let mockFetchSelected = jest.fn();

     let wrapper = shallow( <PetDetails 
      selectedPet = {mockSelected}
      isLoadingSelected = {mockIsLoading}
      fetchSelectedPet = {mockFetchSelected}
    />);
    expect(wrapper).toMatchSnapshot(); 
  })


})

describe('map state to props', () => {
  it('returns an object with correct keys', () => {
    const mockState = {
      selectedPet: {name: 'Fido', animal: 'dog'},
      isLoadingSelected: true
    }

    const expected = {selectedPet: mockState.selectedPet, isLoadingSelected: mockState.isLoadingSelected}
  
  const result = mapStateToProps(mockState)
  expect(result).toEqual(expected)
  })
})