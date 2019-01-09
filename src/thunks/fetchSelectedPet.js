import { addSelectedPet, isLoadingSelected, hasErrored } from '../actions'
import cleanPets from '../helpers/cleanPets'

export const fetchSelectedPet = (id) => {
  const url = `https://cors-anywhere.herokuapp.com/http://api.petfinder.com/pet.get?key=971b0fa2a8b9c9da1bb222d181ecfd6c&id=${id}&format=json`
  return async(dispatch) => {
    try {
      dispatch(isLoadingSelected(true))
      const response = await fetch(url)
      if (!response.ok) {
        throw Error(response.statusText)
      }
      const result = await response.json()
      const selectedPet = cleanPets([result.petfinder.pet])[0]
      dispatch(addSelectedPet(selectedPet))
      dispatch(isLoadingSelected(false))
      localStorage.setItem('selected', JSON.stringify(selectedPet))
  } catch(err) {
      dispatch(hasErrored(err.message))
    }
  }
}

