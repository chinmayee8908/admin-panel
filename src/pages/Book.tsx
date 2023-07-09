import { useContext } from "react"
import AppContext from "../store/AppContext"

const Book = () => {
    const { bookList } = useContext(AppContext)

  return (
       <table>
           <tr>
            <th>Category</th>
            <th>Author</th>
            <th>Title</th>
            <th>Image</th>
            <th>Action</th>
           </tr>    
           {
            bookList.map(item => {
                return <tr>
                    <td>{item.category_name}</td>
                    <td>{item.author_name}</td>
                    <td>{item.book_title}</td>
                    <td>
                        <img src={item.book_cover_img} alt={item.book_cover_img} />
                    </td>
                    <td>{item.author_name}</td>
                    <td>
                        <button>Edit</button>
                        <button>Delete</button>
                    </td>
                </tr>
            })
           }
        </table>
  )
}
export default Book