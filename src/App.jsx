import React from 'react'
import './App.css'
import Magazin from './component/Magazin/Magazin'
import TodoList from './component/todoList/TodoList'

function App() {

  return (
    <div className="Container">
      <TodoList />
      <Magazin/>
    </div>
  )
}

export default App
