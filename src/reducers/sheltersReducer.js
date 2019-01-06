const searchedShelters = (state=[], action) => {
  switch(action.type) {
    case 'SEARCH_BY_SHELTER':
    return action.shelters
    default:
    return state
  }
}

export default searchedShelters