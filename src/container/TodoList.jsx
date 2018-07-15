
import { connect } from 'react-redux'
import { setToggle, deleteTodo } from '../actions'
import TodoListView from '../components/TodoListView'
const getStatusTodos = (todos, filter) => {
  switch (filter) {
    case 'All':
      return todos
    case 'FINISH':
      return todos.filter(todo => {
        return todo.finished
      })
    case 'UNFINISH':
      return todos.filter(todo => {
        return !todo.finished
      })
    default:
      return todos
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onTodoClick: (id) => {
      dispatch(setToggle(id))
    },
    onDeleteTodo: (id) => {
      dispatch(deleteTodo(id))
    }
  }
}

const mapStateToProps = (state) => {
  return { todos: getStatusTodos(state.todos, state.statusFilter) }
}

const TodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoListView)
export default TodoList