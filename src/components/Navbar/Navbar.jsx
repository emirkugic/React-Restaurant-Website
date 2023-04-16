import React from 'react'
import "./Navbar.css"

const Navbar = () => {
    const logo=require('../../assets/gericht.png')
  return (
    <>
        <div className="nav">
            <div className="left-nav">
                <img src={logo} alt="No image" />
            </div>
            <div className="mid-nav">
                <ul className="lists">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Menu</a></li>
                    <li><a href="#">Awards</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </div>
            <div className="right-nav">
                <div className="login">
                    <a>Login/Register</a>
                    <div></div>
                    <a>Book Table</a>
                </div>
            </div>
        </div>
    </>
  )
}

export default Navbar