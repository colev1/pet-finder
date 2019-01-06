const searchedPets = (state=[], action) => {
  switch(action.type) {
    case 'SEARCH_BY_SELECTION':
    return action.pets
    default:
    return state
  }
}

export default searchedPets