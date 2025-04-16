import React from 'react'
import './Header.css'
import BackgroundImage from '../assets/BirdOnBuilding.jpg'

const Header = () => {
  return (
    <div className='Header_Container'>
        <img id='backgroundImage' src={BackgroundImage} alt="Image of building with bird" />
        <h1 id='heading'>CAPTURING REALITY</h1>
    </div>
  )
}

export default Header