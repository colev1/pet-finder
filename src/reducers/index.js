import { combineReducers } from 'redux'
import  randomPet  from './randomPetsReducer'
import {searchedPets, isLoadingPets} from './searchedPetsReducer'
import {searchedShelters, isLoadingShelters, hasErrored} from './sheltersReducer'

const rootReducer = combineReducers({
  randomPet, 
  searchedPets,
  searchedShelters,
  isLoadingShelters,
  isLoadingPets,
  hasErrored
})

export default rootReducer