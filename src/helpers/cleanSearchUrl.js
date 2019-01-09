export const cleanSearchUrl = (search) => {
  const { animal, age, sex } = search;
  return `https://cors-anywhere.herokuapp.com/http://api.petfinder.com/pet.find?key=971b0fa2a8b9c9da1bb222d181ecfd6c&format=json&animal=${animal}&location=80202&sex=${sex}&age=${age}`
}
