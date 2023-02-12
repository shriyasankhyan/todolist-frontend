import React, { useState } from 'react'
import { ChevronRight, Trash2 } from 'react-feather';
import DeleteModal from '../DeleteModal/DeleteModal';
import './TodoCard.scss'

const TodoCard = (props) => {
  const [openTodo, setOpenTodo] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);
  const [idtoDelete, setIdtoDelete] = useState(0);

  let date = new Date(props.date);
  let normalDate = date.toLocaleDateString('en-US', {month: 'short', day: 'numeric', year: 'numeric'})

  const handleDelete = () => {
    setDeleteModal(!deleteModal);
    setIdtoDelete(props.id);
    console.log(idtoDelete)
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
              <button style={{backgroundColor: props.status ? '#6CE87A' : '#FD978D', color: 'white'}}>{props.status? 'completed' : 'pending'}</button>
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
        <DeleteModal open={deleteModal} setDeleteModal={setDeleteModal} idtoDelete={idtoDelete}/>
    </React.Fragment>
  )
}

export default TodoCard