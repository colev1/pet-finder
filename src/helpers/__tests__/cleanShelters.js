import cleanShelters from '../cleanShelters'


describe('clean shelter', () => {
  
  it('takes in an array and returns a cleaned version', ()=> {
    const mockShelters = [{
      address1: {$t: "1517 Meadow Street"},
      address2: {$t: "1517 Meadow Street"},
      city: {$t: "North Haverhill"},
      country: {$t: "US"},
      email: {$t: "nereptilewelfare@gmail.com"},
      fax: {},
      id: {$t: "NH125"},
      latitude: {$t: "44.0901"},
      longitude: {$t: "-72.0235"},
      name: {$t: "Northeastern Reptile Welfare League"},
      phone: {$t: "(603) 259-3244"},
      state: {$t: "NH"},
      zip: {$t: "03774"}
    }]
    const result = cleanShelters(mockShelters)
    const expected = [{
      name: "Northeastern Reptile Welfare League",
      id: "NH125",
      zip: "03774",
      state: "NH",
      city: "North Haverhill",
      phone: "(603) 259-3244",
      email: "nereptilewelfare@gmail.com"
    }]
    expect(result).toEqual(expected)
  })
})