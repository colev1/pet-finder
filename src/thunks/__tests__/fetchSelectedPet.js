import { fetchSelectedPet } from '../fetchSelectedPet'
import { isLoadingSelected, hasErrored, addSelectedPet } from '../../actions'

describe ('fetch selected pet', () => {
  let mockId;
  let mockDispatch

  beforeEach(() => {
    mockId = 0
    mockDispatch = jest.fn()
  })

  it('calls dispatch with the isLoading action', () => {
    const thunk = fetchSelectedPet(mockId)
    thunk(mockDispatch)
    expect(mockDispatch).toHaveBeenCalledWith(isLoadingSelected(true))
  })

  it('should dispatch hasErrored with a message if the response is not ok', async () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      ok: false,
      statusText: 'Something went wrong'
    }))
  
    const thunk = fetchSelectedPet(mockId)
    await thunk(mockDispatch)
    expect(mockDispatch).toHaveBeenCalledWith(hasErrored('Something went wrong'))
  })

  

})