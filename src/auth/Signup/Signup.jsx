import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';
import Header from '../../Components/Header/Header';
import API from '../../utils/API';
import './Signup.scss';

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  function handleSubmit() {
    if (password !== confirmPassword) {
      window.alert("Passwords do not match");
    } else {
      if (name.length > 0 && email.length > 0 && password.length > 0 && confirmPassword.length > 0) {
        const user = {
          name: name,
          email: email,
          password: password,
          password2: confirmPassword,
          tc: false,
        }
        API("post", "user/register/", user)
        .then((response) => {
          console.log(response)
        })
        .catch((error) => {
          console.log(error)
        })
        window.alert("Registered successfully !!");
        navigate('/')
      } else {
        window.alert("Please fill all the fields.")
      }
    }
  }

  return (
    <div className='auth-page'>
      <div className='signup-container'>
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
        <input className='submit-btn login-input' type='submit' />
      </form>
      </div>
   
    </div>
  )
}

export default Signup