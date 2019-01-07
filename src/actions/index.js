export const addAllPets = (pets) => {
  return {
    type: 'ADD_ALL_PETS',
    pets
  }
}

export const addRandomPet = (pet) => {
  return {
    type: 'ADD_RANDOM_PET',
    pet
  }
}

export const searchBySelection = (pets) => {
  return {
    type: 'SEARCH_BY_SELECTION',
    pets
  }
}

export const searchByShelter = (shelters) => {
  return {
    type: 'SEARCH_BY_SHELTER',
    shelters
  }
}

export const isLoadingShelters = (bool) => {
  return {
    type: 'IS_LOADING',
    isLoading: bool
  }
}

export const isLoadingPets = (bool) => {
  return {
    type: 'IS_LOADING_PETS',
  isLoading: bool
  }
}

export const hasErrored = (message) => ({
	type: 'HAS_ERRORED',
	message
})
