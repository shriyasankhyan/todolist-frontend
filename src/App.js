import './App.css';
import {  BrowserRouter, Routes, Route} from 'react-router-dom';
import Login from "./auth/Login"
import Signup from './auth/Signup';
  
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={< Login />}></Route> 
          <Route exact path='/signup' element={< Signup />}></Route> 
        </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
