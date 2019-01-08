export const cleanSearchUrl = (search) => {
  let {animal, age, sex, location} = search;
  if (!location) {
    location = 80202;
  }
  const cleanedUrl = `https://cors-anywhere.herokuapp.com/http://api.petfinder.com/pet.find?key=971b0fa2a8b9c9da1bb222d181ecfd6c&format=json&animal=${animal}&location=${location}&sex=${sex}&age=${age}`
  return cleanedUrl
}