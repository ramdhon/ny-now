export function setLoading(payload = true) {
  return {
    type: 'SET_LOADING',
    payload
  }
}

export function setUrl(payload) {
  return {
    type: 'SET_URL',
    payload
  }
}