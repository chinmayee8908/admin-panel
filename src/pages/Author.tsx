import { useContext } from "react"
import AppContext from "../store/AppContext"

const Author = () => {
    const { authorList } = useContext(AppContext)

  return (
       <table>
           <tr>
            <th>Author</th>
            <th>Author image</th>
            <th>Action</th>
           </tr>
           {
            authorList.map(item => {
                return <tr>
                    <td>{item.author_name}</td>
                    <td>
                        <img src={item.author_image} alt="item.author_image" />
                    </td>
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

export default Author