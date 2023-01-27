import React from 'react'
import { XSquare } from 'react-feather'
import './AddToDoModal.scss'

const AddModal = ({open, setOpen}) => {
  // ** Function for handling add todo
    const handleClickAdd = () => {
        console.log('clicked add')
    }
  // ** Function for handling cancellation
    const handleClickCancel = () => {
        setOpen(!open)
    }
  return (
    <>
    {
      open ?
      (<form className='addTodo'>
        <div className='modalTitle'>
            <h2>Add To Do</h2>
            <div className='closeButton' onClick={() => handleClickCancel()}><XSquare /></div>
        </div>
        <input type="text" placeholder="Title" />
        <textarea rows='4' cols='50' placeholder="Description"></textarea>
        <div>
            <button className='addButton' onClick={() => handleClickAdd()}>Add</button>
            <button className='cancelButton' onClick={() => handleClickCancel()}>Cancel</button>
        </div>
      </form>)
      :
      null
    }
    </>
  )
}

export default AddModal