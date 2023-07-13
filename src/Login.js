import React from 'react'
import PersonIcon from '@mui/icons-material/Person';
import LockIcon from '@mui/icons-material/Lock';
import "./Login.css"
import { useNavigate } from 'react-router-dom';
const Login = () => {
  const navigate=useNavigate();
  const login=()=>{
    navigate("/")
  }
  return (
    <div className='login-container'>
      <div className='Login-form-body'>
        <h4>My Library</h4>
       <div style={{display:'flex'}}> <PersonIcon  className='login-icon'/>
       <input type='text'  className="box"placeholder='UserName'/>
       </div>
       <div style={{display:'flex'}}><LockIcon className='login-icon'/> 
       <input type='text'className="box" placeholder='Password'/>
       </div>
        <input type='submit'className='submit' value="Login" onClick={login}/>
        <div style={{margin:"10px"}}>Don't have an account !<button style={{ borderRadius:"10px",backgroundColor:"gray"}} onClick={()=>{
          navigate("/register")
        }}>Register</button></div>
      </div>
    </div>
  )
}
export default Login
