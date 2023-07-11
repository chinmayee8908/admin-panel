import React from 'react'
import book from "../asset/book.jpg"
import category from "../asset/category.jpg"
import author from "../asset/author.jpg"
import "./Content.css"
import AddCommentRoundedIcon from '@mui/icons-material/AddCommentRounded';
const Content = () => {
  return (
    <div className='dashboard-content'>
                <div style={{display:'flex',justifyContent:'space-evenly',marginTop:"50px"}}>
                    <div className='containers'>
                        <img src={category} />
                        <h4>Category</h4>
                        <span>0</span>
                    </div>
                    <div className='containers'>
                        <img src={author} />
                        <h4>Author</h4>
                        <span>0</span>
                    </div>
                    <div className='containers'>
                        <img src={book} />
                        <h4>Books</h4>
                        <span>0</span>
                    </div>
                </div>
                <button><AddCommentRoundedIcon className='footer-icon'/></button>
                </div>
                
  )
}

export default Content