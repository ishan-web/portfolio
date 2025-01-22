import React from 'react'
import './about.css'
import ME from '../../assets/me.jpg'
import {RiAwardFill} from 'react-icons/ri'
import {FiUsers} from 'react-icons/fi'
import {AiFillFolderOpen} from 'react-icons/ai'

const about = () => {
  return (
    <section id="about">
      <h5>Get to know</h5>
      <h2>About Me</h2>

        <div className="container about__container">
          <div className="about__me">
            <div className="about__me-image">
              <img src={ ME} alt="me"></img>
            </div>
          </div>
          <div className="about__content">
            <div className="about__cards">
              <article className='about__card'>
                <FiUsers className="about__icon"/>
                <h5>Experience</h5>
                <small>2+ years working</small>
              </article>
              <article className='about__card'>
                <RiAwardFill className="about__icon"/>
                <h5>Clients</h5>
                <small>10+ worldwide</small>
              </article>
              <article className='about__card'>
                <AiFillFolderOpen className="about__icon"/>
                <h5>Projects</h5>
                <small>20+ completed</small>
              </article>
            </div>

            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore laudantium ut minus animi reiciendis eius ea at, ipsum voluptatibus nulla! Eligendi dicta ab minima facere officia sint hic at unde.</p>

            <a href="#contact" className='btn btn-primary'>Let's Talk</a>
          </div>
        </div>
    </section>
  )
}

export default about
