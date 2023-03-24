import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
// import {BsDribbble} from 'react-icons/bs'


function HeaderSocials() {
  return (
    <div className='header_socials'>
      <a href="https://www.linkedin.com/in/ziqian-pan-943a171a4/" target="_blank"><BsLinkedin /></a>
      <a href="https://github.com/ZiqianPan" target="_blank"><BsGithub /></a>
      {/* <a href="https://dribble.com" target="_blank"><BsDribbble /></a> */}
    </div>
  )
}

export default HeaderSocials
