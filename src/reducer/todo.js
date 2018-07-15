const todo = (state, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        id: action.id,
        text: action.text,
        finished: false
      }
    case 'SET_TOGGLE':
      if (state.id !== action.id) return state
      return Object.assign({}, state, {
        finished: !state.finished
      })
    default:
      return state
  }
}
const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        todo(undefined, action)
      ]
    case 'SET_TOGGLE':
      return state.map(item => todo(item, action))
    case 'SET_DELETE_TODO':
      return state.filter((item) => {
        return item.id !== action.id
      })
    default:
      return state
  }
}

export default todos