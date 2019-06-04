const defaultState = {
  isLoading: false,
  url: 'https://www.nytimes.com'
}

function reducer (state = defaultState, action) {
  switch(action.type) {
    case 'SET_LOADING':
      return {
        ...state,
        isLoading: action.payload
      }
    
    case 'SET_URL':
      return {
        ...state,
        url: action.payload
      }
      
    default:
      return state
  }
}

export default reducer;