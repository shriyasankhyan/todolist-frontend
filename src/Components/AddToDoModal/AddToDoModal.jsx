import React, { useState } from 'react'
import { XSquare } from 'react-feather'
import API from '../../utils/API';
import './AddToDoModal.scss'

const AddModal = ({open, setOpen}) => {
  //** states
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [deadline, setDeadline] = useState('');

  // ** Function for handling add todo
    const handleSubmit = () => {
        const todo ={
          title: title,
          description: description,
          iscompleted: false,
          deadline: deadline,
        }

        API("post", "todos/", todo)
        .then((response) => {
          console.log(response)
        })
        .catch((error) => {
          console.log(error)
        })
    }

  // ** Function for handling cancellation
    const handleModal = () => {
        setOpen(!open)
        setTitle('')
        setDescription('')
    }

  return (
    <React.Fragment>
    {
      open ?
      (
      <div className='addTodo-container'>
        <form className='addTodo'>
        <div className='modalTitle'>
            <h2>Add To Do</h2>
            <div className='closeButton' onClick={() => handleModal()}><XSquare /></div>
        </div>
        <input type="text" placeholder="Title" onChange={(e) => setTitle(e.target.value)}/>
        <input type="date" placeholder="Deadline" onChange={(e) => setDeadline(e.target.value)} />
        <textarea rows='8' cols='50' placeholder="Description" onChange={(e) => setDescription(e.target.value)}></textarea>
        <div>
            <button type='button' className='addButton' onClick={() => handleSubmit()}>Add</button>
            <button type='button' className='cancelButton' onClick={() => handleModal()}>Cancel</button>
        </div>
      </form>
      </div>
      )
      :
      null
    }
    </React.Fragment>
  )
}

export default AddModal