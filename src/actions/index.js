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
