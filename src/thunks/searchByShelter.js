import { searchByShelter, hasErrored, isLoadingShelters } from '../actions';
import cleanShelters from '../helpers/cleanShelters';

export const fetchSearchedShelters = ({ search }) => {
  const url = `https://cors-anywhere.herokuapp.com/http://api.petfinder.com/shelter.find?format=json&key=971b0fa2a8b9c9da1bb222d181ecfd6c&location=${search}`;
  return async (dispatch) => {
    try {
      dispatch(hasErrored(''));
      dispatch(isLoadingShelters(true));
      const response = await fetch(url);
      if (!response.ok) {
        throw Error(response.statusText);
      }
      dispatch(isLoadingShelters(false));
      const result = await response.json();
      const shelters = cleanShelters(result.petfinder.shelters.shelter);
      dispatch(searchByShelter(shelters));
    } catch (err) {
      dispatch(hasErrored(err.message));
    }
  };
};
