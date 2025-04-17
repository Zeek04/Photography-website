import React from 'react'
import './Content.css'
import PicOfMe from '../assets/Me.jpg'

const Content = () => {
  return (
    <div className='content-div'>
        <h2 id='content_heading'>About Me</h2>
        <div className='about_me_section'>
            <div id='about_me_text'>
                <p id='text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
            <div id='about_me_img'>
                <img id='img' src={PicOfMe} alt="Picture of me" />
            </div>
        </div>
    </div>
  )
}

export default Content