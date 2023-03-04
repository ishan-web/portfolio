import React from 'react'
import './nav.css'
import {AiTwotoneHome} from 'react-icons/ai'
import {FaUserSecret} from 'react-icons/fa'
import {ImBook} from 'react-icons/im'
import {MdElectricalServices} from 'react-icons/md'
import {AiFillContacts} from 'react-icons/ai'


const Nav = () => { 
  return (
    <div>
      <a href="#" ><AiTwotoneHome/></a>
      <a href="#" ><FaUserSecret/></a>
      <a href="#" ><ImBook/></a>
      <a href="#" ><MdElectricalServices/></a>
      <a href="#" ><AiFillContacts/></a>
    </div>
  )
}

export default Nav
