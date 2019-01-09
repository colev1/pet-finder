import cleanPets from '../cleanPets'
import { cleanPhotos } from '../cleanPets'

describe('clean pets helper', () => {
  let pets;
  let result;

  it('takes in an array of pets and returns a cleaned version', () => {
    pets = [
      {
        age: { $t: 'Adult' },
        animal: { $t: 'Small & Furry' },
        breeds: { breed: { $t: 'Rat' } },
        contact: {
          address1: { $t: '1 dog st' },
          address2: {},
          city: { $t: 'The Colony' },
          email: { $t: 'bob@gmail.com' },
          fax: {},
          phone: {},
          state: { $t: 'TX' },
          zip: { $t: '75056' },
        },
        description: { $t: 'Curly is a bit more timid than his buddies, but he… adopted with Larry and Mo (and hopefully Notty).' },
        id: { $t: '42642357' },
        lastUpdate: { $t: '2018-09-02T19:54:04Z' },
        media: {
          photos: {
            photo: [
              { size: 'pnt', $t: 'img1', id: '1' },
              { size: 'fpm', $t: 'img2', id: '1' },
              { size: 'x', $t: 'img3', id: '1' },
              { size: 'pn', $t: 'img4', id: '1' },
              { size: 't', $t: 'img5', id: '1' },
            ],
          },
        },
        mix: { $t: 'no' },
        name: { $t: 'Curly' },
        options: {},
        sex: { $t: 'M' },
        shelterId: { $t: 'TX2295' },
        shelterPetId: {},
        size: { $t: 'S' },
        status: { $t: 'A' },
      },
    ];
    const expected = [{
      name: 'Curly',
      age: 'Adult',
      animal: 'Small & Furry',
      breed: 'Rat',
      id: '42642357',
      sex: 'M',
      shelterId: 'TX2295',
      size: 'S',
      contactInfo: {
        address: '1 dog st',
        zip: '75056',
        state: 'TX',
        email: 'bob@gmail.com',
        city: 'The Colony',
      },
      photos: [
        'img1',
        'img2',
        'img3',
        'img4',
        'img5',
      ],
      description: 'Curly is a bit more timid than his buddies, but he… adopted with Larry and Mo (and hopefully Notty).',

    },
    ];
    result = cleanPets(pets);
    expect(result).toEqual(expected);
  });
});

describe('clean photos', () => {
  let mockPhotos;
  let result;

  it('returns a cleaned version of photos array', () => {
    mockPhotos = [
      { size: 'pnt', $t: 'img1', id: '1' },
      { size: 'fpm', $t: 'img2', id: '1' },
      { size: 'x', $t: 'img3', id: '1' },
      { size: 'pn', $t: 'img4', id: '1' },
      { size: 't', $t: 'img5', id: '1' },
    ];
    const expected = [
      'img1',
      'img2',
      'img3',
      'img4',
      'img5',
    ];
    result = cleanPhotos(mockPhotos);
    expect(result).toEqual(expected);
  });
});
