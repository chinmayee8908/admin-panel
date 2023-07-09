import { useContext } from "react"
import AppContext from "../store/AppContext"

const Category = () => {
    const { categoryList } = useContext(AppContext)

    return (
         <table>
             <tr>
              <th>Category</th>
              <th>Action</th>
             </tr>
             {
              categoryList.map(item => {
                  return <tr>
                      <td>{item.category_name}</td>
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

export default Category