import React from 'react'
import pageLogo from '../assets/LENS.png'
import "./Navbar.css"

const Navbar = () => {
  return (
    <div>
        <nav className='Navbar'>
            <img id="pageLogo" src={pageLogo} alt="Page Logo" />

            <ul className='navOptions'>
                <li><a href="">Home</a></li>
                <li><a href="">Gallery</a></li>
                <li id='contact'><a href="">Contact</a></li>
            </ul>
        </nav>
    </div>
  )
}

export default Navbar