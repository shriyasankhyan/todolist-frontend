import React, { useState } from 'react'
import AddModal from '../../Components/AddToDoModal/AddToDoModal';
import TodoCard from '../../Components/TodoCard/TodoCard';
import { data } from '../../data/sampleTodosData';
import './User.scss'

const User = ({username}) => {
  // ** states
  const [open, setOpen] = useState(false);

  // ** Function for handling modal
  const handleModal = () => {
    setOpen(!open);
    console.log('clicked')
  }

  return (
    <>
      <div className='title-user'>
        <h1>Hello {username || 'User'} </h1>
        <button onClick={() => handleModal()}>create Todo</button>
      </div>
      <div className='todo-container'>
        <h4>Your recent activity</h4>
        <div className='todos'>
          {data.map(({id, title, description, status, date}) => (
            <TodoCard key={id} title={title} description={description} status={status} date={date} />
          ))}
        </div>
      </div>
      <AddModal open={open} setOpen={setOpen} />
    </>
  )
}

export default User