import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import todoList from './reducer'
import Todos from './components/Todos'

const store = createStore(todoList)
const App = () => {
  return (
    <Provider store={store} >
      <Todos />
    </Provider>
  )
}
ReactDOM.render(<App />,
  document.getElementById('root'));
registerServiceWorker();