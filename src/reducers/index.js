import { combineReducers } from 'redux'
import  randomPet  from './randomPetsReducer'
import searchedPets from './searchedPetsReducer'

const rootReducer = combineReducers({
  randomPet, 
  searchedPets
})

export default rootReducer