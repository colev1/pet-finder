import { selectedPet, isLoadingSelected } from '../selectedPetReducer';
import * as actions from '../../actions';

describe('selected pet reducer', () => {
  it('should return default state', () => {
    const expected = '';
    const result = selectedPet(undefined, {});
    expect(result).toEqual(expected);
  });

  it('should return the state with an array of pets', () => {
    const petId = 0;
    const result = selectedPet(undefined, actions.addSelectedPet(petId));
    expect(result).toEqual(petId);
  });
});

describe('is loading ', () => {
  it('should return state with a true or false value', () => {
    const bool = true;
    const result = isLoadingSelected(false, actions.isLoadingSelected(bool));
    expect(result).toEqual(bool);
  });
});