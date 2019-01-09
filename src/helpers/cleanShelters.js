const cleanShelters = shelters => shelters.map((shelter) => {
  const cleanedShelter = {
    name: shelter.name.$t,
    id: shelter.id.$t,
    zip: shelter.zip.$t,
    state: shelter.state.$t,
    city: shelter.city.$t,
    phone: shelter.phone.$t,
    email: shelter.email.$t,
  };
  return cleanedShelter;
});

export default cleanShelters;
