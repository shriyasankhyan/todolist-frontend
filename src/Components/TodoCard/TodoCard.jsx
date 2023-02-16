import React, { useState } from 'react'
import { ChevronRight, Trash2 } from 'react-feather';
import DeleteModal from '../DeleteModal/DeleteModal';
import UpdateModal from '../UpdateModal/UpdateModal';
import './TodoCard.scss'

const TodoCard = (props) => {
  const [openTodo, setOpenTodo] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);
  const [updateModal, setUpdateModal] = useState(false);
  const [todoId, setTodoId] = useState(0);

  let date = new Date(props.date);
  let normalDate = date.toLocaleDateString('en-US', {month: 'short', day: 'numeric', year: 'numeric'})

  const handleDelete = () => {
    setDeleteModal(!deleteModal);
    setTodoId(props.id);
    console.log(todoId)
  }

  const handleUpdate = () => {
    if(props.status === true){
      window.alert("This todo is completed already, you can't modify this.")
    }
    else{
      setUpdateModal(!updateModal);
      setTodoId(props.id);
      console.log(todoId);
    }
  }

  return (
    <React.Fragment>
        <div className='todo-card'>
          <div className='todo-content'>
            <div className='todo-title'>
              <button onClick={() => setOpenTodo(!openTodo)}><ChevronRight /></button>
              <span>{props.title}</span>
            </div>
            <div className='todo-status'>
              <button style={{backgroundColor: props.status ? '#6CE87A' : '#FD978D', color: 'white'}} onClick={() => handleUpdate()}>{props.status? 'completed' : 'pending'}</button>
              <span>{normalDate}</span>
              <button onClick={() => handleDelete()}><Trash2 /></button>
            </div>
          </div>
          {
            openTodo ? 
            (<p className='description'>{props.description}</p>)
            : null
          }
        </div>
        <DeleteModal open={deleteModal} setDeleteModal={setDeleteModal} todoId={todoId}/>
        <UpdateModal open={updateModal} setUpdateModal={setUpdateModal} todoId={todoId}/>
    </React.Fragment>
  )
}

export default TodoCard