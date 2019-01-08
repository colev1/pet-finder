import { searchedPets, isLoadingPets, hasErrored} from '../searchedPetsReducer'
import * as actions from '../../actions'

describe('search pets reducer', () => {
  it('should return default state', () => {
		const expected = []
		const result = searchedPets(undefined, {})
		expect(result).toEqual(expected)
  })
  it('should return the state with an array of pets', () => {
    const pets = [{pets: 'name'}, {pet2: 'name'} ]
    const expected = ''
		const result = searchedPets(undefined, actions.searchBySelection(pets))
		expect(result).toEqual(pets)
	})
})

describe('isLoadingPets', () => {
  it('should return state with a true or false value', () => {
    const bool = true;
    const result = isLoadingPets(false, actions.isLoadingPets(bool))
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