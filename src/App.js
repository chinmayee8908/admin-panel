import { BrowserRouter, Route ,Routes} from 'react-router-dom';
import Login from './Login';
import Dashboard from './Homepage/Dashboard';
import Layout from './Layout';
import Content from './Homepage/Content';
import Category from './Category/Category';

function App() {
  return (
<BrowserRouter>
<Routes>
<Route path='/' element={<Layout/>}/>
<Route path="/dashboard" element={<Content/>}>
  <Route path='/category' element={<Category/>}/>
  </Route>
</Routes>
</BrowserRouter> 
  )
}

export default App;
