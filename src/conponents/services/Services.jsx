import React from 'react'
import {BiCheck} from 'react-icons/bi'
import './services.css'


const Services = () => {
  return (
    <section id='services'>
      <h5>What I offer</h5>
      <h2>Services</h2>
      <div className="container services__container">
        <article className='service'>
          <div className="service__head">
            <h3>UX/UI Design</h3>
           </div>
           <ul className='service__list'>
            <li>
            <BiCheck className='service__list-icon'/>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
            <BiCheck className='service__list-icon'/>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
            <BiCheck className='service__list-icon'/>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
            <BiCheck className='service__list-icon'/>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
            <BiCheck className='service__list-icon'/>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
           </ul>


        </article>
        {/* end of ui */}
        <article className='service'>
          <div className="service__head">
            <h3>Web Development</h3>
           </div>
           <ul className='service__list'>
            <li>
            <BiCheck className='service__list-icon'/>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
            <BiCheck className='service__list-icon'/>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
            <BiCheck className='service__list-icon'/>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
            <BiCheck className='service__list-icon'/>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
            <BiCheck className='service__list-icon'/>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
            <BiCheck className='service__list-icon'/>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
           </ul>


        </article>
        {/* web development */}
        <article className='service'>
          <div className="service__head">
            <h3>Content Creation</h3>
           </div>
           <ul className='service__list'>
            <li>
            <BiCheck className='service__list-icon'/>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
            <BiCheck className='service__list-icon'/>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
            <BiCheck className='service__list-icon'/>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
            <BiCheck className='service__list-icon'/>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
            <BiCheck className='service__list-icon'/>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
           </ul>


        </article>
        {/* Content Creation */}
      </div>

    </section>
  )
}

export default Services
