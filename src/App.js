import './App.css';
import {  BrowserRouter, Routes, Route} from 'react-router-dom';
import Login from "./auth/Login/Login.jsx"
import Signup from './auth/Signup/Signup.jsx';
import User from './pages/user dashboard/User';
  
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={< Login />}></Route> 
          <Route exact path='/signup' element={< Signup />}></Route> 
          <Route exact path='/user' element={< User />}></Route> 
        </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
