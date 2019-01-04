const cleanPet = (pet) => {
  console.log(pet)
  const cleanedPhotos = cleanPhotos(pet.media.photos.photo)
  const cleanedPet = {
    name: pet.name.$t,
    age: pet.age.$t,
    animal: pet.animal.$t, 
    breed: pet.breeds.breed.$t,
    id: pet.id.$t,
    sex: pet.sex.$t,
    shelterId: pet.shelterId.$t,
    size: pet.size.$t,
    contactInfo: {
      address: pet.contact.address1.$t,
      zip: pet.contact.zip.$t, 
      state: pet.contact.state.$t,
      email: pet.contact.email.$t,
      city: pet.contact.city.$t
    },
    photos: cleanedPhotos
  }
  return cleanedPet
}

const cleanPhotos = (photos) => {
  return photos.map(photo => {
    return photo.$t
  })
}
export default cleanPet