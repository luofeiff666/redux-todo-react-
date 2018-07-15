let IdIndex = 0
const addTodo = (text) => {
  return {
    type: 'ADD_TODO',
    id: IdIndex++,
    text
  }
}
const setToggle = (id) => {
  return {
    type: 'SET_TOGGLE',
    id
  }
}
const setStatus = (filter) => {
  return {
    type: 'SET_STATUS',
    filter
  }
}
const deleteTodo = (id) => {
  return {
    type: 'SET_DELETE_TODO',
    id
  }
}

export {
  addTodo,
  setToggle,
  setStatus,
  deleteTodo
}