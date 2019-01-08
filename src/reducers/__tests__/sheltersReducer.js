import { searchedShelters, isLoadingShelters, hasErrored} from '../sheltersReducer'
import * as actions from '../../actions'

describe('shelters  reducer', () => {
  it('should return default state', () => {
		const expected = ''
		const result = selectedPet(undefined, {})
		expect(result).toEqual(expected)
  })

  it('should return the state with an array of pets', () => {
		const petId = 0;
		const result = selectedPet(undefined, actions.addSelectedPet(petId))
		expect(result).toEqual(petId)
	})
})