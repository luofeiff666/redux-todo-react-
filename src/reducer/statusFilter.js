const statusFilter = (state = "ALL", action) => {
  switch (action.type) {
    case 'SET_STATUS':
      return action.filter

    default:
      return state
  }
}

export default statusFilter