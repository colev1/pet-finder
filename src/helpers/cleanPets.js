const cleanPets = (pets) => {
  return pets.map(pet => {
    let cleanedPhotos;
    if(pet.media.photos.photo) {
      cleanedPhotos = cleanPhotos(pet.media.photos.photo)
    } else {
      cleanedPhotos = []
    }
    console.log(cleanedPhotos)
    return {
    name: pet.name.$t,
    age: pet.age.$t,
    animal: pet.animal.$t, 
    breed: pet.breeds.breed.$t,
    id: pet.id.$t,
    sex: pet.sex.$t,
    shelterId: pet.shelterId.$t,
    size: pet.size.$t,
    description: pet.description.$t,
    contactInfo: {
      address: pet.contact.address1.$t,
      zip: pet.contact.zip.$t, 
      state: pet.contact.state.$t,
      email: pet.contact.email.$t,
      city: pet.contact.city.$t
      },
      photos: cleanedPhotos
    }
  })
}

const cleanPhotos = (photos) => {
  return photos.map(photo => photo.$t)
}

export default cleanPets;