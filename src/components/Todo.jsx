import React from 'react'
let Todo = ({ onClick, text, finished, onDelete }) => {
  return (
    <li>
      <span onClick={onClick} style={{ color: finished ? 'red' : 'black' }}>{text}</span>
      <span onClick={onDelete}>x</span>
    </li>
  )
}
export default Todo