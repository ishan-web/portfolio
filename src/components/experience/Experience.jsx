import React from 'react'
import './experience.css'
import {BsFillCalendarCheckFill} from 'react-icons/bs'

const Experience = () => {
  return (
    <section id="experience">
      <h5>What skills I have</h5>
      <h2>My Experience</h2> 

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend development</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <BsFillCalendarCheckFill className='experience__details-icon' />
              <div>
                <h4>HTML</h4>
                <small className="text-light">Experienced</small>
              </div>              
            </article>
            <article className='experience__details'>
              <BsFillCalendarCheckFill className='experience__details-icon' />
              <div>
                <h4>CSS</h4>
                <small className="text-light">Experienced</small>
              </div> 
            </article>
            <article className='experience__details'>
              <BsFillCalendarCheckFill className='experience__details-icon' />
              <div>
                <h4>Javascript</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsFillCalendarCheckFill className='experience__details-icon'/>
              <div>
                <h4>VueJs</h4>
                <small className="text-light">Begginer</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsFillCalendarCheckFill className='experience__details-icon'/>
              <div>
                <h4>React JS</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
          </div>
        </div>



{/* ========backend===================== */}


        <div className="experience__backend">
          <h3>Backend development</h3>
          <div className="experience__content">
            
            <article className='experience__details'>
              <BsFillCalendarCheckFill className='experience__details-icon' />
              <div>
                <h4>PHP-Laravel</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsFillCalendarCheckFill className='experience__details-icon' />
              <div>
                <h4>Node JS</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsFillCalendarCheckFill className='experience__details-icon'/>
              <div>
                <h4>MySQL</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsFillCalendarCheckFill className='experience__details-icon'/>
              <div>
                <h4>Django</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>  
            <article className='experience__details'>              
              <BsFillCalendarCheckFill className='experience__details-icon' />
              <div>
                <h4>MongoDB</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className='experience__details'>              
              <BsFillCalendarCheckFill className='experience__details-icon' />
              <div>
                <h4>CodeIgniter</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>          
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
