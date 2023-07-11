import { BrowserRouter, Route ,Routes} from 'react-router-dom';
import Login from './Login';
import Layout from './Layout';
import Content from './Dashboard/Content';
import Category from './Category/Category';
import Author from "./Author/Author";
import Books from "./Books/Books"
import Comment from "./Comment/Comment"
import User from "./user/User"
import Setting from"./Settings/Setting"
function App() {
  return (
<BrowserRouter>
<Routes>
  <Route path='/' element={<Layout/>}>
  <Route index element={<Content/>}/>
   <Route path='category' element={<Category/>}/>
     <Route path='books' element={<Books/>}/>
     <Route path='comment' element={<Comment/>}/>
   <Route path='user' element={<User/>}/> 
   <Route path='author' element={<Author/>}/> 
   <Route path='setting' element={<Setting/>}/> 
  </Route>
  <Route path='/login' element={<Login/>}/>
</Routes>
</BrowserRouter> 
  )
}

export default App;
