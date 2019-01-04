export const fetchRandomPets = (pets, id) => {
  return {
    type: 'FETCH_RANDOM_PETS',
    pets,
    id
  }
}
