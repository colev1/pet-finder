import { searchedShelters, isLoadingShelters, hasErrored} from '../sheltersReducer'
import * as actions from '../../actions'

describe('shelters  reducer', () => {
  it('should return default state', () => {
		const expected = []
		const result = searchedShelters(undefined, {})
		expect(result).toEqual(expected)
  })

  it('should return the state with an array of pets', () => {
    const shelters = [{shelter: 'name'}, {shelter: 'name'} ]
		const result = searchedShelters(undefined, actions.searchByShelter(shelters))
		expect(result).toEqual(shelters)
	})
})

describe('is loading shelters', () => {
  it('should return state with a true or false value', () => {
    const bool = true;
    const result = isLoadingShelters(false, actions.isLoadingShelters(bool))
    expect(result).toEqual(bool)
  })
})

describe('hasErrored', () => {
  it('should return the state with an error message', () => {
    const message = 'error message'
    const result = hasErrored('', actions.hasErrored(message))
    expect(result).toEqual(message)
  })
})