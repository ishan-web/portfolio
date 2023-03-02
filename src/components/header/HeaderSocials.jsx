import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {AiFillGithub} from 'react-icons/ai'
import {BsFacebook} from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className="header__socials">
        <a href="https://www.facebook.com/profile.php?id=100007276965491"  target="_blank"><BsFacebook/></a>  
        <a href="https://github.com/ishan-web"  target="_blank"><AiFillGithub/></a>  
        <a href="https://www.linkedin.com/"  target="_blank"><BsLinkedin/></a>  
    </div>
  )
}

export default HeaderSocials
