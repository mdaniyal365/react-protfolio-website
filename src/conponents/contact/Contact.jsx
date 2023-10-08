import React from 'react'
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'

import {BsWhatsapp} from 'react-icons/bs'
import './contact.css'
import { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {
  const form= useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_w1o29s5', 'template_thxk759', form.current, 'ZveMlvk5fDIUL7enp')
    e.target.reset();
     
  };


  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className='container contact__container'>
        <div className="contact__options">
      <article className='contact__option'>
        <MdOutlineEmail/>
        <h4>Email</h4>
        <h5>mohdddaniyal365@gmail.com</h5>
        <a href="mailto:mohddaniyalmalik" target="_blank">Send me message</a>
      </article>

      <article className='contact__option'>
        <RiMessengerLine/>
        <h4>Messenger</h4>
        <h5>MohammadDaniyalMalik</h5>
        <a href="https://m.me/danial.malik.169067/" target="_blank">Send me message</a>
      </article>

      <article className='contact__option'>
        <BsWhatsapp/>
        <h4>Whatsapp</h4>
        <h5>+91-8218411347</h5>
        <a href="https://wa.me/+918218411347?text=" target="_blank" >Send me message</a>
      </article>

      </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your full name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message" id="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>

        </form>
      </div>
    </section>
  )
}

export default Contact
