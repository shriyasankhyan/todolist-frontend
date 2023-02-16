import React, { useState } from 'react'
import API from '../../utils/API'
import './UpdateModal.scss'

const UpdateModal = (props) => {
    const [todoData, setTodoData] = useState([]);
    const handleUpdateModal = () => {
        props.setUpdateModal(!props.open)
    }

    const handleUpdate = () => {
        const updatedTodo = {
            isComplete: true
        }

        API("put", `todos/${props.todoId}/`, updatedTodo)
        .then((response) => {
            console.log(response);
            window.location.reload();
        })
        .catch((error) => {
            console.log(error);
        })
        handleUpdateModal();
    }

  return (
    <React.Fragment>
        {
            props.open ?
            (<div className='modal-container'>
                <h4>Are you sure you want to mark this todo as completed?</h4>
                <div className='button-group'>
                    <button className='update-button' onClick={() => handleUpdate()}>Update</button>
                    <button className='cancel-button' onClick={() => handleUpdateModal()}>Cancel</button>
                </div>
            </div>)
            :
            null
        }
    </React.Fragment>
  )
}

export default UpdateModal