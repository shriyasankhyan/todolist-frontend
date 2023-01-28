import React, {useState} from 'react'
import styles from './Signup.scss';
import Header from '../../Components/Header/Header';

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  function handleSubmit() {
    if (password !== confirmPassword) {
      window.alert("Passwords do not match");
    } else {
      if (name.length > 0 && email.length > 0 && password.length > 0 && confirmPassword.length > 0) {
        window.alert("Submitted");
      } else {
        window.alert("Please fill all the fields.")
      }
    }
  }

  return (
    <div className={styles.app}>
      <Header title="Signup"/>
      <form className="login-form" onSubmit={handleSubmit}>
        <div className='form-field'>
          <label className='form-label' >Enter your name</label>
        <input className='login-input' type="text" value={name} onChange={e => {
          setName(e.target.value)
        } } />
        </div>
          <div className='form-field'>
          <label className='form-label' >Enter your email</label>
        <input className='login-input' type="email" value={email} onChange={e => {
          setEmail(e.target.value)
        }} />
        </div>
        <div className='form-field'>
          <label className='form-label' >Enter your password</label>
          <input className='login-input' type="password" value={password} onChange={e => {
          setPassword(e.target.value)
        }}/>
        </div>
        <div className='form-field'>
          <label className='form-label'>Confirm password</label>
           <input className='login-input' type="password" value={confirmPassword} onChange={e => {
          setConfirmPassword(e.target.value)
        }}/>
       </div>
        <input  type="submit" className='submit-btn login-input' />
      </form>
    </div>
  )
}

export default Signup