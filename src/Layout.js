import { Outlet, Link } from "react-router-dom";
import Sidebar from "./Homepage/Sidebar"
import Navbar from "./Homepage/Navbar"
import React from 'react'
const Layout = () => {
  return (
    <>
<Sidebar/>
<Navbar/>
<Outlet/>
    </>
  )
}

export default Layout