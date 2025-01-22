import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio1.jpg'
import IMG3 from '../../assets/portfolio1.jpg'
import IMG4 from '../../assets/portfolio2.png'
import IMG5 from '../../assets/portfolio2.png'
import IMG6 from '../../assets/portfolio2.png'

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Ecommerce website for smartphones',
    github: 'https://github.com/ishan-web/ecommerce',
    demo: 'https://github.com/ishan-web/ecommerce',
  },
  {
    id: 2,
    image: IMG2,
    title: 'Ecommerce website for smartphones',
    github: 'https://github.com/ishan-web/ecommerce',
    demo: 'https://github.com/ishan-web/ecommerce',
  },
  {
    id: 3,
    image: IMG3,
    title: 'Ecommerce website for smartphones',
    github: 'https://github.com/ishan-web/ecommerce',
    demo: 'https://github.com/ishan-web/ecommerce',
  },
  {
    id: 4,
    image: IMG4,
    title: 'Netflix Clone  ',
    github: 'https://github.com/ishan-web/ecommerce',
    demo: 'https://github.com/ishan-web/ecommerce',
  },
  {
    id: 5,
    image: IMG5,
    title: 'netflix website',
    github: 'https://github.com/ishan-web/ecommerce',
    demo: 'https://github.com/ishan-web/ecommerce',
  },
  {
    id: 6,
    image: IMG6,
    title: 'Ecommerce website for smartphones',
    github: 'https://github.com/ishan-web/ecommerce',
    demo: 'https://github.com/ishan-web/ecommerce',
  }
]


const Portfolio = () => {
  return (
    <section id="portfolio">
      
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
         {
          data.map(({id, image, title, github, demo}) =>{
           return(
           <article key={id} className="portfolio__item">
            <div className="portfolio__item-image">
              <img src={image} alt={title} />
            </div>
            <h3>{title}</h3>
            <div className="portfolio__item-cta">
              <a href={github} className='btn' target='_blank'>Github</a>
              <a href={demo} className="btn btn-primary" target='_blank'>Live Demo</a>
            </div>
          </article>
           )
          })
       }

      </div>
    </section>
  )
}

export default Portfolio
  