export const searchBySelection = pets => ({
  type: 'SEARCH_BY_SELECTION',
  pets,
});

export const searchByShelter = shelters => ({
  type: 'SEARCH_BY_SHELTER',
  shelters,
});

export const isLoadingShelters = bool => ({
  type: 'IS_LOADING',
  isLoading: bool,
});

export const isLoadingPets = bool => ({
  type: 'IS_LOADING_PETS',
  isLoading: bool,
});

export const hasErrored = message => ({
  type: 'HAS_ERRORED',
  message,
});

export const addSelectedPet = id => ({
  type: 'ADD_SELECTED_PET',
  id,
});

export const isLoadingSelected = bool => ({
  type: 'IS_LOADING_SELECTED',
  isLoading: bool,
});
