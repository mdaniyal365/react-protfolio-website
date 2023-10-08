import React from 'react'
import ME from '../../assets/me-about.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'
import '../about/about.css'
const About = () => {
  return (
    <section id='about'>
    <h5>Get To Know</h5>
    <h2>About Me</h2>
    <div className="container about__container">
      <div className="about__me">
        <div className="about__me-image">
          <img src={ME} alt=""/>
          
        </div>

      </div>
      <div className="about__content">
        <div className="about__cards">
        <article className='about__card'>
            <FaAward className='about__icon'/>
            <h5>Experience</h5>
            <small>1+ Year Working</small>
          </article>
          <article className='about__card'>
            <FiUsers className='about__icon'/>
            <h5>Client</h5>
            <small>20+ India</small>
          </article>
          <article className='about__card'>
            <VscFolderLibrary className='about__icon'/>
            <h5>Projects</h5>
            <small>5+ completed</small>
          </article> 
        </div>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. In nobis soluta voluptatibus similique voluptate cum qui ullam cumque. Alias dolorem deserunt cum nam, voluptatem consequuntur beatae? Odio voluptas dolore hic?
              </p>
              <a href="#contact" className='btn btn-primary'>Let's Talk</a>
      </div>
    </div>
    </section>
  )
}

export default About
