import { searchByShelter } from '../actions'
import cleanShelters from '../helpers/cleanShelters'

export const fetchSearchedShelters = ({search}) => {
  const url = `https://cors-anywhere.herokuapp.com/http://api.petfinder.com/shelter.find?format=json&key=971b0fa2a8b9c9da1bb222d181ecfd6c&location=${search}`;
  return async(dispatch) => {
    try {
      const response = await fetch(url)
      if (!response.ok) {
        throw Error(response.statusText)
      }
      const result = await response.json()
      console.log(result)
      const shelters = cleanShelters(result.petfinder.shelters.shelter)
      // console.log(shelters)
      dispatch(searchByShelter(shelters))
    } catch(err) {
      console.log(err)
    }
  }
}
