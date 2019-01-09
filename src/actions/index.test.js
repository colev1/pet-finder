import * as actions from './index';

describe('actions', () => {
  it('should have a type of search by selection with a pets array', () => {
    const pets = [{
      name: 'Fido',
      animal: 'dog',
    }];
    const expected = {
      type: 'SEARCH_BY_SELECTION',
      pets,
    };
    const result = actions.searchBySelection(pets);
    expect(result).toEqual(expected);
  });
  it('should have a type of search by shelter with a shelter array', () => {
    const shelters = [{
      name: 'shelter',
      city: 'LA',
    },
    {
      name: 'shelter1',
      city: 'Denver',

    }];
    const expected = {
      type: 'SEARCH_BY_SHELTER',
      shelters,
    };
    const result = actions.searchByShelter(shelters);
    expect(result).toEqual(expected);
  });
  it('should have a type of isLoadingShelters that takes in a boolean', () => {
    const bool = true;
    const expected = {
      type: 'IS_LOADING',
      isLoading: bool,
    };
    const result = actions.isLoadingShelters(bool);
    expect(result).toEqual(expected);
  });
  it('should have a type of isLoadingPets that takes in a boolean', () => {
    const bool = true;
    const expected = {
      type: 'IS_LOADING_PETS',
      isLoading: bool,
    };
    const result = actions.isLoadingPets(bool);
    expect(result).toEqual(expected);
  });
  it('should have a type of hasErrored that takes in a error message', () => {
    const message = 'Error!!';
    const expected = {
      type: 'HAS_ERRORED',
      message,
    };
    const result = actions.hasErrored(message);
    expect(result).toEqual(expected);
  });
  it('should have a type of add selected pet that takes in the pet id', () => {
    const id = 1;
    const expected = {
      type: 'ADD_SELECTED_PET',
      id,
    };
    const result = actions.addSelectedPet(id);
    expect(result).toEqual(expected);
  });
  it('should have a type of isLoadingSelected that takes in a boolean', () => {
    const bool = true;
    const expected = {
      type: 'IS_LOADING_SELECTED',
      isLoading: bool,
    };
    const result = actions.isLoadingSelected(bool);
    expect(result).toEqual(expected);
  });
});
