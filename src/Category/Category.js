import React from 'react'
import "./Category.css"
import Table from 'react-bootstrap/Table';
import { useState, useEffect } from 'react';
const Category = () => {
    const [record, setRecord] = useState([]);
    useEffect(() => {
      fetch(`http://ebook.heyaskme.in//api.php?cat_list`,{
        method: "POST",
        mode: "cors",
        credentials: "include",
        headers: {
          "Content-Type": "application/json"}
        })
        .then((response) => response.json())
        .then(response => {
          console.log("this is response", response);
          setRecord(response.EBOOK_APP);
        })
        .catch(err => console.log(err))
    }, [])
    console.log("data" ,record);
    return (
      <div className='category-container'>
        <div className='category-tabel'>
          <Table striped bordered hover variant="black">
            <thead>
              <tr>
                <th>Category</th>
                <th>Action</th>
              </tr>
            </thead>           
          
            {record.map((item, index)=>{
      return <tr key={index}>
        <td>{item.category_name}</td>
          </tr>
     })}
               </Table>
        </div>
      </div>
    )
  }

  export default Category