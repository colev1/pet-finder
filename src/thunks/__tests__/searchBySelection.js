import { fetchSearchedPets } from '../searchBySelection'
import { isLoadingPets, hasErrored } from '../../actions'

describe ('search by selected pet filters', () => {
  let mockSearch
  let mockDispatch

  beforeEach(() => {
    mockSearch = {animal: 'dog'}
    mockDispatch = jest.fn()
  })

  it('calls dispatch with the isLoading action', () => {
    const thunk = fetchSearchedPets(mockSearch)
    thunk(mockDispatch)
    expect(mockDispatch).toHaveBeenCalledWith(isLoadingPets(true))
  })

  it('should dispatch hasErrored with a message if the response is not ok', async () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      ok: false,
      statusText: 'Something went wrong'
    }))
  
    const thunk = fetchSearchedPets(mockSearch)
    await thunk(mockDispatch)
    expect(mockDispatch).toHaveBeenCalledWith(hasErrored('Something went wrong'))
  })

})