import React, { useState } from "react";
import "./Login.scss";
import Header from "../../Components/Header/Header";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    if (email.length > 0 && password.length > 0) {
      try {
         {
            const config = {
                headers: {
                    "Content-type": "application/json",
                },
            };
            const { data } = await axios.post("http://127.0.0.1:8000/api/user/login/",
                { email, password },
                config
            );

            localStorage.setItem("userModel", JSON.stringify(data));
            const userData = JSON.parse(localStorage.getItem("userModel")).token.access
            console.log(userData)
            navigate('/user');
        }
      } catch (err) {
        window.alert("Fill the correct details.");
      }
    } else {
      window.alert("Please fill all the fields.");
    }
  }

  return (
    <div className="auth-page">
      <div className="login-container">
        <Header title="Login" />
        <form className="login-form" onSubmit={handleSubmit}>
          <div className="form-field">
            <label className="form-label">Enter your email</label>
            <input
              className="login-input"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-field">
            <label className="form-label">Enter your password</label>
            <input
              className="login-input"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="form-field">
            <p>Didn't have account <button onClick={() => navigate('/signup')}>Register now</button></p>
          </div>
          <input type="submit" className="submit-btn login-input" />
        </form>
      </div>
    </div>
  );
};

export default Login;
