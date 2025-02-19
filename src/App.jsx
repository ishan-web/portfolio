import React from 'react'
import Header from './components/header/Header'
import About from './components/about/About'
import Footer from './components/footer/Footer'
import Contact from './components/contact/Contact'
import Experience from './components/experience/Experience'
import Nav from './components/nav/Nav'
import Testimonials from './components/testimonials/Testimonials'
import Portfolio from './components/portfolio/Portfolio'
import Services from './components/services/Services'

const App = () => {
  return (
    <>
      <Header />
      <About /> 
      <Experience />
      <Nav />
      {/* <Testimonials /> */}
      <Portfolio />
      {/* <Services/>      */}
      <Contact />
      {/* <Footer /> */}
    </>
  )
}

export default App
