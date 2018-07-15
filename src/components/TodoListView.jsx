import React from 'react'
import Todo from './Todo'
let TodoListView = ({ todos, onTodoClick, onDeleteTodo }) => {
  return <ul>
    {todos.map((todo) => (
      <Todo key={todo.id} {...todo} onClick={() =>
        onTodoClick(todo.id)
      } onDelete={() => {
        onDeleteTodo(todo.id)
      }} />
    )
    )}
  </ul>
}
export default TodoListView