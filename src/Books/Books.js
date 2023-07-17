import React from "react";
import "./Books.css";
import Table from "react-bootstrap/Table";
import { useState, useEffect } from "react";
import BookDetails from "./BookDetails";
import { Button, TextField } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
const Books = ({ user }) => {
  const [book, setbook] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredList, setFilteredList] = useState(book);
  const [open, setOpen] = useState(false);
  const [bookDetails, setBookDetails] = useState(null);
  const [comment, setComment] = useState(null);
  // const [pageCount, setPageCount] = useState(1);
  // const [currentPage, setcurrentPage] = useState(0)
    useEffect(() => {
    fetch(`http://ebook.heyaskme.in//api.php?latest`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setbook(data.EBOOK_APP);
        setFilteredList(data.EBOOK_APP);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const handleOpen = () => {
    setOpen(true);
  };
  // bookDetails
   const handleSeeBookDetail = async (id) => {
    try {
      const response = await fetch(
        `http://ebook.heyaskme.in//api.php?book_id=${id}`
      );
      const data = await response.json();
      setBookDetails(data["EBOOK_APP"][0]);
      handleOpen();
    } catch (error) {
      console.error(error);
    }
  };
  // search
  const filterBySearch = (event) => {
    const searchData = event.target.value;
    setSearchText(searchData);
    var updatedList = [...book];
    updatedList = updatedList.filter(
      (item) =>
        item.book_title.toLowerCase().indexOf(searchData.toLowerCase()) !== -1 ||
        item.author_name.toLowerCase().indexOf(searchData.toLowerCase()) !== -1 ||
        item.category_name.toLowerCase().indexOf(searchData.toLowerCase()) !== -1
    );
    setFilteredList(updatedList);
  };
  // comment
  const handleAddComment = async (id) => {
    try {
          const response = await fetch(
        `http://ebook.heyaskme.in//api_comment.php?book_id=${id}&user_name=${user}&comment_text=${comment}`);
      const responseData = await response.json();
      const data = responseData["EBOOK_APP"][0];
      if (data.success === "1") {
      }
      setComment("");
    } catch (error) {
      }
  };
  // Page Change
  // const handlePageChange = (selectedObject) => {
	// 	setcurrentPage(selectedObject.selected);
	// 	handleFetch();
	// };

  return (
    <div className="book-container">
      <div className="book-header">
        <span>Manage Books</span>
        <div className="searchbox-button">
          <div style={{ marginRight: "230px" }}>
            <input
              type="text"
              onChange={filterBySearch}
              value={searchText}
              placeholder="Search Here..."
              style={{ margin: "10px" }}
            />
            {/* <SearchRoundedIcon style={{position:'absolute',}}/> */}
          </div>
          <button> Add Books</button>
        </div>
      </div>
      <div className="book-table">
        <Table>
          <thead>
            <tr>
              <th>Category</th>
              <th>Author</th>
              <th>Title</th>
              <th>Book Image</th>
              <th>Action</th>
            </tr>
          </thead>
   {filteredList.map((item, index) => {
            return (
              <tr key={index}>
                <td>{item.category_name}</td>
                <td>{item.author_name}</td>
                <td>{item.book_title}</td>
                <td>
                  <img src={`http://ebook.heyaskme.in/images/thumbs/${item.book_cover_img}`} alt="hello"/>
                </td>
                <td>
                  <button
                    style={{ backgroundColor: "blue" }}
                    onClick={() => handleSeeBookDetail(item.id)}>
                    See Details
                  </button>
                </td>
              </tr>
            );
          })}
        </Table>
      </div>
    {/* //  {bookDetails && ( */}
        <BookDetails open={open}>
          <CloseIcon onClick={()=>setOpen(false)}/>
          <img
            src={`http://ebook.heyaskme.in/images/thumbs/${bookDetails?.book_cover_img}`}alt="hello"/>
          <div>Title: {bookDetails?.book_title}</div>
          <div>Description: {bookDetails?.book_description}</div>
          <div>Author: {bookDetails?.author_name}</div>
          <div>Category: {bookDetails?.category_name}</div>
          <Button style={{backgroundColor:"blue",
              padding: "10px ",
              width: "120px",
              height:"50px",
              color:"white"
            }}
            onClick={() => {window.open(bookDetails?.book_file_url);
            }}>
            Read Book
          </Button>
          <div>
            <TextField
                onChange={(e) => setComment(e.target.value)}
              value={comment}
            />
           <button style={{backgroundColor:"gray",width:"100px"}}onClick={() => handleAddComment(bookDetails.id)}>Comment</button>
          </div>
        </BookDetails>
      {/* )} */}
    </div>
  );
};

export default Books;
