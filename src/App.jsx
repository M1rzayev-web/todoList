import React from 'react'
import './App.css'
import BrithDay from './component/BrithDay/BrithDay'
import Button from './component/ButtonUchun/Button'
import Magazin from './component/Magazin/Magazin'
// import Slide from './component/slide/Slide'
import TodoList from './component/todoList/TodoList'


function App() {

  return (
    <div className="Container">
      <TodoList />
      <Magazin />
      <BrithDay />
      {/* <Slide /> */}
      <Button/>
    </div>
  )
}

export default App

