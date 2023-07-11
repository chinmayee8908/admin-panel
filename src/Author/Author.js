import React from 'react'
import "./Author.css"
import SearchRoundedIcon from"@mui/icons-material/SearchRounded"
const Author = () => {
  return (
    <div className='author-container'>
       <div className='author-header'>
      <span>Manage Authors</span>
      <div className='searchbox-button'>
        <div style={{marginRight:"180px"}}>
          <input type='text'/><SearchRoundedIcon style={{position:'relative',margin:10}}/>
          </div>
        <button> Add Authors</button>


      </div>
      </div>
   
    </div>
  )
}

export default Author