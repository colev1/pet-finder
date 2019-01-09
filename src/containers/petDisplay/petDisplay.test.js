
import { shallow, mount } from 'enzyme';
import React from 'react';
import { PetDisplay, mapDispatchToProps, mapStateToProps } from './petDisplay';

jest.mock('../../thunks/searchBySelection');
jest.mock('../../thunks/fetchSelectedPet');


describe('Pet Display', () => {
  let wrapper;
  let mockSearchedPets;
  let mockIsLoading;
  let mockHasErrored;
  let mockFetch;
  let mockAddPet;
  let mockEvent;

  beforeEach(() => {
    mockSearchedPets = [{
      age: 'Adult',
      animal: 'Small & Furry',
      breed: 'Rat',
      contactInfo: {
        address: '1 dog st', city: 'The Colony', email: 'bob@gmail.com', state: 'TX', zip: '75056',
      },
      id: '42642357',
      name: 'Curly',
      photos: ['img1', 'img2', 'img3', 'img4', 'img5'],
      sex: 'M',
      shelterId: 'TX2295',
      size: 'S',
    }];
    mockIsLoading = false;
    mockHasErrored = '';
    mockFetch = jest.fn();
    mockAddPet = jest.fn();
    mockEvent = { target: { value: 'dog', name: 'animal' } };
    wrapper = mount(
      <PetDisplay
        searchedPets={mockSearchedPets}
        isLoadingPets={mockIsLoading}
        hasErrored={mockHasErrored}
        fetchSearchedPets={mockFetch}
        addSelectedPet={mockAddPet}
      />,
    );
  });

  it('matches the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should call handle change on change of input and updates state', () => {
    const handleChangeSpy = jest.spyOn(wrapper.instance(), 'handleChange');
    const select = wrapper.find('select').at(0);
    select.simulate('change', mockEvent);
    select.simulate('change', mockEvent);
    expect(wrapper.state().animal).toEqual('dog');
    expect(handleChangeSpy).toHaveBeenCalled();
  });

  it('updates state on handle change', () => {
    wrapper.instance().handleChange(mockEvent);
    expect(wrapper.instance().state).toEqual({
      animal: 'dog',
      age: '',
      sex: '',
      location: '',
    });
  });
  it('should call handle submit on form submit', () => {
    const handleSubmitSpy = jest.spyOn(wrapper.instance(), 'handleSubmit');
    wrapper.instance().forceUpdate();
    const form = wrapper.find('form').at(0);
    form.simulate('submit', mockEvent);
    expect(handleSubmitSpy).toHaveBeenCalled();
  });

  it('should call handle submit and fetch searched pets', () => {
    const mockFetchSearchedPets = jest.fn();
    wrapper = shallow(
      <PetDisplay
          fetchSearchedPets={mockFetchSearchedPets}
          searchedPets={mockSearchedPets}
        />, { disableLifecycleMethods: true },
    );
    wrapper.handleSubmit = jest.fn();
    wrapper.fetchSearchedPets = mockFetchSearchedPets;
    wrapper.find('form').simulate('submit', {
      preventDefault: () => wrapper.handleSubmit(),
    });
    expect(wrapper.handleSubmit).toHaveBeenCalled();
    expect(wrapper.fetchSearchedPets).toHaveBeenCalled();
  });

  it('should call display more on click and add selected pet', () => {
    const mockFetchSelectedPets = jest.fn();
    const mockLoading = false;
    wrapper = mount(
      <PetDisplay
          addSelectedPet={mockFetchSelectedPets}
          searchedPets={mockSearchedPets}
          history={['path']}
          isLoadingPets={mockLoading}
        />, { disableLifecycleMethods: true },
    );
    wrapper.displayMore = jest.fn();
    wrapper.addSelectedPet = mockFetchSelectedPets;
    wrapper.find('.pet-card').at(0).simulate('click', 100);
    expect(wrapper.addSelectedPet).toHaveBeenCalled();
    expect(wrapper.displayMore).toHaveBeenCalled();
  });
});
