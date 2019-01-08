import React from 'react';
import {mapDispatchToProps, mapStateToProps} from './App';
import App from './App'
import { shallow } from 'enzyme';


// jest.mock('../../thunks/fetchRandomPet')

describe('App', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />)
  })
  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })
})

describe('map state to props', () => {
  it('returns an object with all keys', () => {
    const mockState = {
      pets: [{name: 'Fido', animal: 'dog'},
    {name: 'JOe', animal: 'cat'}],
      isLoading: true,
      error: 'Error!!'
    }
    const expected = {pets: mockState.pets,
    isLoading: mockState.isLoading, 
  error: mockState.error
}
  const result = mapStateToProps(mockState)
  expect(result).toEqual(expected)
  })
})


