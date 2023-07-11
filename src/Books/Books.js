import React from 'react'
import "./Books.css"
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
const Books = () => {
  return (
    <div className='book-container'>
     <div className='book-header'>
      <span>Manage Books</span>
      <div className='searchbox-button'>
        <div style={{marginRight:"180px"}}><input type='text'/>
        <SearchRoundedIcon style={{position:'relative',margin:10}}/></div>
        <button> Add Books</button>


      </div>
      </div>
   
    </div>
  )
}

export default Books