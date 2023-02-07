import React, { useEffect, useState } from 'react'
import AddModal from '../../Components/AddToDoModal/AddToDoModal';
import TodoCard from '../../Components/TodoCard/TodoCard';
import API from '../../utils/API';
import './User.scss'

const User = ({username}) => {
  // ** states
  const [open, setOpen] = useState(false);
  const [data, setData] = useState([]);

  // ** Function for handling modal
  const handleModal = () => {
    setOpen(!open);
  }

  useEffect(() => {
    API("get", "todos")
    .then((response) => {
      console.log(response);
      setData(response.data);
    })
    .catch((error) => {
      console.log(error);
    })
  }, [])
  

  return (
    <>
      <div className='title-user'>
        <h1>Hello {username || 'User'} </h1>
        <button onClick={() => handleModal()}>create Todo</button>
      </div>
      <div className='todo-container'>
        <h4>Your recent activity</h4>
        <div className='todos'>
          {data.map(({id, title, description, isComplete, deadline}) => (
            <TodoCard key={id} title={title} description={description} status={isComplete} date={deadline} />
          ))}
        </div>
      </div>
      <AddModal open={open} setOpen={setOpen} />
    </>
  )
}

export default User