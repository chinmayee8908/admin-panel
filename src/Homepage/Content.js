import React from 'react'
import book from "../asset/book.jpg"
import category from "../asset/category.jpg"
import author from "../asset/author.jpg"
import library from "../asset/library.jpg"
import "./Content.css"
const Content = () => {
  return (
    <div className='dashboard-content'>
                <div style={{display:'flex',justifyContent:'space-evenly',marginTop:"15px"}}>
                    <div className='container1'>
                        <img src={category} />
                        <h3>Category</h3>
                    </div>
                    <div className='container1'>
                        <img src={author} />
                        <h3>Author</h3>
                    </div>
                    <div className='container1'>
                        <img src={book} />
                        <h3>Books</h3>
                    </div>
                </div>
               <div className=' carousel'>
                 
      
               </div>
            </div>
  )
}

export default Content