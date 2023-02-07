import React, { useState } from 'react'
import { ChevronRight } from 'react-feather';
import './TodoCard.scss'

const TodoCard = (props) => {
  const [openTodo, setOpenTodo] = useState(false);

  return (
    <React.Fragment>
        <div className='todo-card'>
          <div className='todo-content'>
            <div className='todo-title'>
              <button onClick={() => setOpenTodo(!openTodo)}><ChevronRight /></button>
              <span>{props.title}</span>
            </div>
            <div className='todo-status'>
              <button style={{backgroundColor: props.status ? '#8DFD9A' : '#FD978D', color: 'white'}}>{props.status? 'completed' : 'pending'}</button>
              <span>{props.date}</span>
            </div>
          </div>
          {
            openTodo ? 
            (<p>{props.description}</p>)
            : null
          }
        </div>
    </React.Fragment>
  )
}

export default TodoCard