export const selectedPet = (state='', action) => {
  switch(action.type) {
    case 'ADD_SELECTED_PET':
      return action.id
    default:
      return state
  }
}

export const isLoadingSelected = (state=false, action) => {
  switch(action.type) {
    case 'IS_LOADING_SELECTED':
      return action.isLoading
    default:
      return state
  }
}
