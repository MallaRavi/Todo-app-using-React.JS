import React from 'react'

function Todo(props) {
    let displayList = props.todoList.filter(item => {
        if(item.checked === props.checking){
            return item
        }
        else if(props.checking === 'all' && item.checked!=='done' ){
            return item
        }
        else{
            return null;
        }
    });

    if(displayList.length>0){
        return (
           <div>
                {
                    displayList.map((item,index)=>{
                    return <div key={index} className='todo-listitem'>
                        <div className='todo-listitem-title'>
                            <p>{item.name}</p>
                        </div>
                        <div className='todo-listitem2'>
                            <div className='todo-listitem-time'>
                                <p>{item.start} - <span>{item.end}</span></p>
                            </div>
                            {/* we can implement this function by chagning list to state using useState */}
                            {/* <div className='todo-listitem-checkbox'><input type='checkbox' id={`checkbox-${index}`}></input></div> */}
                        </div>
                        <div>
                            <p>{item.todo}</p>
                        </div>
                    </div>
                    })
                }
           </div>
        )
        
    }
    else{
        return null;
    }
}

export default Todo
