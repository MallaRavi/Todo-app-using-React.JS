import React, { useState } from 'react'
import '../styles/main.css'
import Todo from './todo'
import CreateTodo from './createTodo'

function Main() {

  let [todoList,handleTodoList]=useState([])

  let addingTodo=(newTodo)=>{
    handleTodoList(prev=>[...prev,newTodo]);
  }


  return (
    <div className='main-container'>
      <div>
        <CreateTodo addingTodo={addingTodo} />
      </div>
      <div className='main-titleboard'>
        <p className='item'>Dashboard &gt; To Do List</p>
        <h1 className='item' id='todo-list-heading'>To Do List</h1>
      </div>
      <div className='main-tasklist-container'>
        <div className='item'>
          <div className='item-heading'>
            <h1>Todo List</h1>
          </div>
          <div className='todo-list'>
              <Todo todoList={todoList} checking={"all"} />
          </div>
          
        </div>
        <div className='item'>
          <div className='item-heading'>
            <h1>In Work</h1>
          </div>
          <div className='work-list'>
            <div>
              <Todo todoList={todoList} checking={"working"} />
            </div>
          </div>
        </div>
        <div className='item'>
          <div className='item-heading'>
            <h1>Done</h1>
          </div>
          <div className='done-list'>
            <Todo todoList={todoList} checking={"done"} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Main
