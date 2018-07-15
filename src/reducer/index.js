import todos from './todo'
import statusFilter from './statusFilter'
import {
  combineReducers
} from 'redux'

const todoList = combineReducers({
  todos,
  statusFilter
})
export default todoList