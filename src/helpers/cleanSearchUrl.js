export const cleanSearchUrl = (search) => {
  console.log(search)
  const {animal, size, sex} = search;
  const cleanedUrl = `https://cors-anywhere.herokuapp.com/http://api.petfinder.com/pet.find?key=971b0fa2a8b9c9da1bb222d181ecfd6c&format=json&animal=${animal}&size=${size}&location=80202&sex=${sex}`
  console.log(cleanedUrl)
  return cleanedUrl
}