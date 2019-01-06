import { searchBySelection } from '../actions/searchBySelection'
// import cleanSearchUrl from '../helpers/helper'
// import { connect } from 'react-redux'
import cleanPets from '../helpers/cleanPets'


export const fetchSearchedPets = (url) => {
  return async(dispatch) => {
    try {
      const response = await fetch(url)
      if (!response.ok) {
        throw Error(response.statusText)
      }
      const result = await response.json()
      console.log(result.petfinder.pets)
      const pets = cleanPets(result.petfinder.pets.pet)
      console.log(pets)
      dispatch(searchBySelection(pets))
    } catch(err) {
      console.log(err)
    }
  }
  // const url = cleanSearchUrl(search);
}

// export default fetchSearchedPets