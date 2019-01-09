import { createStore } from 'redux'
import { searchedPets, isLoadingPets } from './searchedPetsReducer'
import { selectedPet, isLoadingSelected } from './selectedPetReducer'
import { searchedShelters, isLoadingShelters, hasErrored } from './sheltersReducer'
import rootReducer from './index'

describe('rootReducer', () => {
  let store = createStore(rootReducer);
  it('should show initial state of results when searched pets handles an action', () => {
    expect(store.getState().searchedPets).toEqual(searchedPets([], {}));
  });

  it('should show initial state of info when isLoadingPets handles an action', () => {
    expect(store.getState().isLoadingPets).toEqual(isLoadingPets(false, {}));
  });

  it('should show initial state of selected pet when selected pets reducer handles an action', () => {
    expect(store.getState().selectedPet).toEqual(selectedPet('', {}));
  });

  it('should show initial state of is loading selected', () => {
    expect(store.getState().isLoadingSelected).toEqual(isLoadingSelected(false, {}));
  });

  it('should show initial state of isLoading shelters when isLoadingReducer handles an action', () => {
    expect(store.getState().isLoadingShelters).toEqual(isLoadingShelters(false, {}));
  });

  it('should show initial state of searched shelters when search shelters handles an action', () => {
    expect(store.getState().searchedShelters).toEqual(searchedShelters([], {}));
  });

  it('should show initial state of has errored  when has errored handles an action', () => {
    expect(store.getState().hasErrored).toEqual(hasErrored('', {}));
  });
});