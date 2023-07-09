import './App.css'
import { BrowserRouter,Routes, Route } from 'react-router-dom'
import Login from './pages/Login'
import Home from './pages/Home'
import Layout from './Layout'
import Author from './pages/Author'
import Category from './pages/Category'
import Book from './pages/Book'

function App() {

  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path='/' element={<Login />}/>
          <Route path='/login' element={<Login />}/>
          <Route path='/home' element={<Home />}/>
          <Route path='/categories' element={<Category />}/>
          <Route path='/author' element={<Author />}/>
          <Route path='/books' element={<Book />}/>
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App
