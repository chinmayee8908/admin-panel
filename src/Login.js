import React from 'react'
import PersonIcon from '@mui/icons-material/Person';
import LockIcon from '@mui/icons-material/Lock';
import "./Login.css"
import { useNavigate } from 'react-router-dom';
const Login = () => {
  const navigate=useNavigate();
  const login=()=>{
    navigate("/dashboard")
  }
  return (
    <div className='wrapper'>
      <div className='form-body'>
        <h4>My Library</h4>
        <div className='input-box'><span className='icon'><PersonIcon /></span><input type='box' placeholder='Username'required/>
        </div>
        <div className='input-box'><span className='icon'><LockIcon /></span><input type='password' placeholder='Password' required/>
        </div>
        <button type='submit' className='login-btn' onClick={login}>Login</button>
      </div>
    </div>
  )
}
export default Login
