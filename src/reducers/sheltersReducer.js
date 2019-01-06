const searchedShelters = (state=[], action) => {
  switch(action.type) {
    case 'SEARCH_BY_SHELTER':
    return action
    default:
    return state
  }
}

export default searchedShelters