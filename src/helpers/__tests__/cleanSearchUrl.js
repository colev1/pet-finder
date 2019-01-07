import {cleanSearchUrl} from '../cleanSearchUrl'

describe('clean search url', () => {
  
  it('takes in a search url and returns a cleaned version', ()=> {
    let search = {
      animal: 'dog',
      size: 'M',
      sex: 'F'
    }
    let result = cleanSearchUrl(search)
    let expected = 'https://cors-anywhere.herokuapp.com/http://api.petfinder.com/pet.find?key=971b0fa2a8b9c9da1bb222d181ecfd6c&format=json&animal=dog&size=M&location=80202&sex=F'

    expect(result).toEqual(expected)
  })
})