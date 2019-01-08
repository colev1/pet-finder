 export const searchedShelters = (state=[], action) => {
  switch(action.type) {
    case 'SEARCH_BY_SHELTER':
      return action.shelters
    default:
      return state
  }
}

export const isLoadingShelters = (state=false, action) => {
  switch(action.type) {
    case 'IS_LOADING':
      return action.isLoading
    default:
      return state
  }
}

export const hasErrored = (state = '', action) => {
	switch(action.type) {
	case 'HAS_ERRORED':
		return action.message
	default:
		return state
	}
}