import React from 'react'
import './nav.css'
import {AiTwotoneHome} from 'react-icons/ai'
import {FaUserSecret} from 'react-icons/fa'
import {ImBook} from 'react-icons/im'
import {MdElectricalServices} from 'react-icons/md'
import {AiFillContacts} from 'react-icons/ai'
import { useState} from 'react'


const Nav = () => { 
  const[activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      <a href="#"  onClick={()=> setActiveNav('#')} className={activeNav === '#' ? 'active' : ''} ><AiTwotoneHome/></a>
      <a href="#about" onClick={()=> setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''} ><FaUserSecret/></a>
      <a href="#experience" onClick={()=> setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><ImBook/></a>
      <a href="#footer" onClick={()=> setActiveNav('#footer')} className={activeNav === '#footer' ? 'active' : ''}><MdElectricalServices/></a>
      <a href="#contact" onClick={()=> setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><AiFillContacts/></a>
    </nav>
  )
}

export default Nav
