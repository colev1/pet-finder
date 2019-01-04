import { addRandomPet } from '../actions/addRandomPet'
import cleanPet from '../helpers/helper'

export const fetchRandomPet = (url) => {
  const cors = 'https://cors-anywhere.herokuapp.com/';
  return async(dispatch) => {
    try {
      const response = await fetch(url)
      // const randomPet = await cleanPet(response)
      if (!response.ok) {
        throw Error(response.statusText)
      }
      const result = await response.json()
      const randomPet = result.petfinder.pet;
      const cleanedPet = cleanPet(randomPet)
      dispatch(addRandomPet(cleanedPet))

  } catch(err) {
    console.log(err)
    }
  }
}

