import React from 'react'
import InputBox from '../container/InputBox'
import TodoList from '../container/TodoList'
import Footer from '../components/Footer'


class Todos extends React.Component {
  render() {
    return (
      <div>
        <InputBox />
        <TodoList />
        <Footer />
      </div>
    )
  }
}

export default Todos