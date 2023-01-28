import React, { useState } from 'react';
import styles from './Login.scss';
import Header from '../../Components/Header/Header';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit() {
     if ( email.length > 0 && password.length > 0 ) {
        window.alert("Submitted");
      } else {
        window.alert("Please fill all the fields.")
      }
  }

  return (
    <div className='login-container'>
      <Header title="Login"/>
      <form className="login-form" onSubmit={handleSubmit}>
        <div className='form-field'>
          <label className='form-label'>Enter your email</label>
          <input className='login-input' type="email" value={email} onChange={e =>
          setEmail(e.target.value)} 
          />
        </div>
      <div className='form-field'>
        <label className='form-label'>Enter your password</label>
        <input className='login-input' type="password" value={password} onChange={e =>
          setPassword(e.target.value)} 
          />
          </div>
          <input type="submit" className='submit-btn login-input' />
          
      </form>
    </div>
  )
}

export default Login;