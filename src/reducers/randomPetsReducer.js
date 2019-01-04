const randomPet = (state={}, action) => {
  switch(action.type) {
    case 'ADD_RANDOM_PET':
      return action.pet
    default:
      return state
  }
}

export default randomPet;