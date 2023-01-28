import React from 'react'
import styles from './Header.scss';

const Header = (props) => {
  return (
    <div className={styles}>
      <h1 className='header'>
         {props.title}
      </h1>
      </div>
  )
}

export default Header