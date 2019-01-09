import { fetchSearchedShelters } from '../searchByShelter'
import { isLoadingShelters, hasErrored } from '../../actions'

describe ('search selected shelter', () => {
  let mockSearch
  let mockDispatch

  beforeEach(() => {
    mockSearch = '80303'
    mockDispatch = jest.fn()
  })

  it('calls dispatch with the isLoading action', () => {
    const thunk = fetchSearchedShelters(mockSearch)
    thunk(mockDispatch)
    expect(mockDispatch).toHaveBeenCalledWith(isLoadingShelters(true))
  })

  it('should dispatch hasErrored with a message if the response is not ok', async () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      ok: false,
      statusText: 'Something went wrong'
    }))
  
    const thunk = fetchSearchedShelters(mockSearch)
    await thunk(mockDispatch)
    expect(mockDispatch).toHaveBeenCalledWith(hasErrored('Something went wrong'))
  })

})