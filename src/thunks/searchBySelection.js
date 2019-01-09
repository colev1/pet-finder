import { searchBySelection, hasErrored, isLoadingPets } from '../actions'
import cleanPets from '../helpers/cleanPets'

export const fetchSearchedPets = (url) => {
  return async(dispatch) => {
    try {
      dispatch(hasErrored(''))
      dispatch(isLoadingPets(true))
      const response = await fetch(url)
      if (!response.ok) {
        throw Error(response.statusText)
      }
      dispatch(isLoadingPets(false))
      const result = await response.json()
      const pets = await cleanPets(result.petfinder.pets.pet)
      dispatch(searchBySelection(pets))
    } catch(err) {
      dispatch(hasErrored(err.message))
    }
  }
}

