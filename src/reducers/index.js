import { combineReducers } from 'redux'
import  randomPet  from './randomPetsReducer'

const rootReducer = combineReducers({
  randomPet
})

export default rootReducer