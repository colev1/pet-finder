import { combineReducers } from 'redux'
import  randomPet  from './randomPetsReducer'
import searchedPets from './searchedPetsReducer'
import searchedShelters from './sheltersReducer'

const rootReducer = combineReducers({
  randomPet, 
  searchedPets,
  searchedShelters
})

export default rootReducer