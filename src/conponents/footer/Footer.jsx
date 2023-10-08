import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {BsFacebook} from 'react-icons/bs'
import './footer.css'

const Footer = () => {
  return (
  
      <footer>
        <a href="#" className='footer__logo'>MALIK</a>
        <ul className='permalinks'>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>
        <div className="footer__socials">
        <a href="https://www.linkedin.com/in/mohammad-daniyal-b5a939217/" target="_black"><BsLinkedin/></a>
        <a href="https://github.com" target="_black"><BsGithub/></a>
        <a href="https://www.facebook.com/danial.malik.169067" target="_black"><BsFacebook/></a>
        </div>

        <div className="footer__copyright">
          <small>&copy; All Right Reserved</small>
        </div>
      </footer>
   
  )
}

export default Footer
