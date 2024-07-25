import React, { useRef } from 'react'
import '../styles/createTodo.css'


function CreateTodo(props) {
  
    const taskName= useRef(null);
    const startDate=useRef(null);
    const endDate=useRef(null);
    const taskInfo=useRef(null);
    const addtodoList={
      name:'',
      start:'',
      end:'',
      checked:'',
      todo:'',
    }

  const formSubmittion=(event)=>{
    event.preventDefault();
      addtodoList.name=taskName.current.value;
      addtodoList.start=startDate.current.value;
      addtodoList.end=endDate.current.value;
      addtodoList.todo=taskInfo.current.value;
      let today=new Date();
      let sDate=new Date(startDate.current.value);
      let eDate=new Date(endDate.current.value);
      if(today>eDate){
        addtodoList.checked="done";
      }
      else if(today>sDate && today<eDate){
        addtodoList.checked="working";
      }
      else{
        addtodoList.checked="all";
      }




      props.addingTodo(addtodoList);
  }


  return (
    <div className='createTodo-container'>
      <form onSubmit={formSubmittion} method='get'>
      <div className='item item1'>
        <button type='submit'> + Create new Task </button>
      </div>
      <div className='item item2'>
        <label htmlFor="task-name" >Task Name: </label>
        <input name='task-name' id='task-name' type='text' ref={taskName}/>
      </div>
      <div className='task-dates item item3'>
        <div>
          <label htmlFor="start-date" >Start date: </label>
          <input name='start-date' id='start-date' type='date' ref={startDate}/>
        </div>
        <div>
          <label htmlFor="end-date" >End date: </label>
          <input name='end-date' id='end-date' type='date' ref={endDate}/>
        </div>
      </div>
      <div className='item item4'>
        <label htmlFor="task-info" >To do: </label>
        <textarea name='task-info' id='task-info' type='textarea' rows='8' cols="50" ref={taskInfo} />
      </div>
      </form>
    </div>
  )
}

export default CreateTodo
