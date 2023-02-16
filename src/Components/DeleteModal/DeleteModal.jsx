import React from 'react'
import API from '../../utils/API'
import './DeleteModal.scss'

const DeleteModal = (props) => {
    const handleDeleteModal = () => {
        props.setDeleteModal(!props.open)
    }

    const handleDelete = () => {
        console.log(props.todoId);
        API("delete", `todos/${props.todoId}`, {})
        .then((response) => {
            console.log(response);
        })
        .catch((error) => {
            console.log(error);
        })
        handleDeleteModal();
    }

  return (
    <React.Fragment>
        {
            props.open ?
            (<div className='modal-container'>
                <h4>Are you sure you want to permanently delete this item?</h4>
                <div className='button-group'>
                    <button className='delete-button' onClick={() => handleDelete()}>Delete</button>
                    <button className='cancel-button' onClick={() => handleDeleteModal()}>Cancel</button>
                </div>
            </div>)
            :
            null
        }
    </React.Fragment>
  )
}

export default DeleteModal