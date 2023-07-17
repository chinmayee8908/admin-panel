import React, { useState ,useEffect} from 'react'
import book from "../asset/book.jpg"
import category from "../asset/category.jpg"
import author from "../asset/author.jpg"
import "./Content.css"
import AddCommentRoundedIcon from '@mui/icons-material/AddCommentRounded';
import { useNavigate } from 'react-router-dom'
const Content = () => {
    const[books,setBooks]=useState([])
    const[categories,setcategories]=useState([])
    const[authors,setAuthors]=useState([])
    const navigate=useNavigate()
    const handleAuthor=()=>{
    navigate("author")
    }
    const handleCategory=()=>{
        navigate("category")
        }
        const handleBook=()=>{
            navigate("books")
            }
            useEffect(() => {
                fetch(`https://ebook.heyaskme.in//api.php?cat_list`)
                  .then((response) => response.json())
                  .then((data) => {
                    console.log(data);
                    setcategories(data.EBOOK_APP);
                  })
                  .catch((err) => {
                    console.log(err);
                  });
              }, []);
    
            useEffect(() => {
                fetch(`http://ebook.heyaskme.in//api.php?author_list`)
                  .then((response) => response.json())
                  .then((data) => {
                    console.log(data);
                    setAuthors(data.EBOOK_APP);
                  })
                  .catch((err) => {
                    console.log(err);
                  });
              }, []);
            
            useEffect(() => {
                fetch(`http://ebook.heyaskme.in//api.php?latest`)
                  .then((response) => response.json())
                  .then((data) => {
                    console.log(data);
                    setBooks(data.EBOOK_APP);
                  })
                  .catch((err) => {
                    console.log(err);
                  });
              }, []);
              console.log("data",books.length)
  return (
    <div className='dashboard-content'>
                <div style={{display:'flex',justifyContent:'space-evenly',marginTop:"50px"}}>
                    <div className='containers' onClick={handleCategory}
                     style={{backgroundColor:"rgba(198,210,234)"}}>
                        <img src={category} />
                        <h4>Category</h4>
                        <span>{categories.length}</span>
                    </div>
                    <div className='containers' onClick={handleAuthor}
                     style={{backgroundColor:"rgba(198,177,159)"}}>
                        <img src={author} />
                        <h4>Author</h4>
                        <span>{authors.length}</span>
                    </div>
                    <div className='containers'onClick={handleBook}
                    style={{backgroundColor:"rgba(205,233,189)"}} >
                        <img src={book} />
                        <h4>Books</h4>
                        <span>
                            {books.length}
                        </span>
                    </div>
                </div>
                <button><AddCommentRoundedIcon className='footer-icon'/></button>
                </div>
                
  )
}

export default Content