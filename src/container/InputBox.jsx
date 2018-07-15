import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'
let InputBox = ({ dispatch }) => {
  let input = React.createRef()
  return (
    <form onSubmit={(e) => {
      e.preventDefault()
      if (!input.current.value.replace(/(^\s*)|(\s*$)/g, '')) return
      dispatch(addTodo(input.current.value))
      input.current.value = ''
    }}>
      <input ref={input} type="text" /></form>
  )
}

InputBox = connect()(InputBox)
export default InputBox