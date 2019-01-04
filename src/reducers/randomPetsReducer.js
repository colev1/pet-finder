const randomPetsReducer = (state=[], action) => {
  switch(action.type) {
    case 'FETCH_RANDOM_PETS':
      return action
    default:
      return state
  }
}

export default randomPetsReducer;