import React from 'react'
import "./Navbar.css"
import userimage from "../asset/user.png"
import Content from './Content'

const Navbar = () => {
    return (
        <div className='rightside-content'>
            <div className='top-bar'>
                <div style={{ display: 'flex' }}><span>MY</span><h3>Library</h3></div>
                <div className='user'>
                    <img src={userimage} />
                </div>
            </div>
            <Content/>
            </div>
        
        )
}

export default Navbar