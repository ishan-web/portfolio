import React from 'react'
import './contact.css'
import { MdOutlineEmail } from 'react-icons/md'
import { RiMessengerLine } from 'react-icons/ri'
import { BsWhatsapp } from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_krcvgzp', 'template_kq1garf', form.current, 'wfI2RhdPnBbD_Pb_9')
    e.target.reset();
  };
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className='container contact__container'>
        <div className="contact__options">
          <article className='contact__option'>
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>isshaan17@gmail.com</h5>
            <a href='mailto:isshaan17@gmail.com' target='_blank'>Send a Message</a>
          </article>
          <article className='contact__option'>
            <RiMessengerLine/>
            <h4>Messenger</h4>
            <h5>Ishan</h5>
            <a href='https://www.facebook.com/profile.php?id=100007276965491mailoto:isshaan17@gmail.com' target='_blank'>Send a Message</a>
          </article>
          <article className='contact__option'>
            <BsWhatsapp/>
            <h4>Whatsapp</h4>
            <h5>+123456789</h5>
            <a href='https://api/whatsapp.com/send?phone+9779849147132' target='_blank'>Send a Message</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="type" name="name" placeholder='Your Full Name' required />
          <input type="email" name="email" placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your Message' required ></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact
