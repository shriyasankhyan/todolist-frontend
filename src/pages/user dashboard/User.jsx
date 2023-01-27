import React, { useState } from 'react'
import { PlusCircle } from 'react-feather';
import AddModal from '../../Components/AddToDoModal/AddToDoModal';
import './User.scss'

const User = ({username}) => {
  // ** states
  const [open, setOpen] = useState(false);
  // const [title, setTitle] = useState();
  // const [description, setDescription] = useState();

  // ** Function for handling modal
  const handleModal = () => {
    setOpen(!open);
  }

  return (
    <>
      <div className='titleUser'>
        <h2>Hello {username || 'User'} </h2>
        <button onClick={() => handleModal()}>create Todo</button>
      </div>
      <AddModal open={open} setOpen={setOpen} />
    </>
  )
}

export default User