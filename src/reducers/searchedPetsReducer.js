export const searchedPets = (state=[], action) => {
  switch(action.type) {
    case 'SEARCH_BY_SELECTION':
      return action.pets
    default:
      return state
  }
}

export const isLoadingPets = (state=false, action) => {
  switch(action.type) {
    case 'IS_LOADING_PETS':
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
