import { combineReducers } from 'redux'
import {searchedPets, isLoadingPets} from './searchedPetsReducer'
import {selectedPet, isLoadingSelected} from './selectedPetReducer'
import {searchedShelters, isLoadingShelters, hasErrored} from './sheltersReducer'