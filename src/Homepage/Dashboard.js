import React from 'react'
import Sidebar from './Sidebar'
import Navbar from './Navbar'
import Content from './Content'

const Dashboard = () => {
  return (
    <div style={{display:'flex',flexDirection:'row',backgroundColor:'white',height:"100vh",width:"100vw"}}>
    <Sidebar/>
    <Navbar/>
    </div>
  )
}

export default Dashboard