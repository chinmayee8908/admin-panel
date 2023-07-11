import React from 'react'
import "./User.css"
import SearchRoundedIcon from"@mui/icons-material/SearchRounded"
const User = () => {
  return (
    <div className='user-container'>
      <div className='user-header'>
      <span>Manage Users</span>
      <div className='searchbox-button'>
        <div style={{marginRight:"180px"}}>
          <input type='text'/><SearchRoundedIcon style={{position:'relative',margin:10}}/>
          </div>
        <button> Add Users</button>
      </div>
      </div>
   
    </div>
  )
}

export default User