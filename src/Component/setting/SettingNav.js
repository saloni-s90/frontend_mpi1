import React,{useState} from 'react'
import './SettingNav.css'
import {AiFillHome} from 'react-icons/ai'
import {FaUserGraduate} from 'react-icons/fa'
import {BsFillJournalBookmarkFill} from 'react-icons/bs'
import {BiSolidContact} from 'react-icons/bi'
import {CgWebsite} from 'react-icons/cg'

function SettingNav() {
  const [activeNav,setActiveNav] = useState('#')

  return (
    <div>
      <nav>
      <a href='#' onClick={() => {setActiveNav('#')}}   className={activeNav === '#' ? 'active' : ''}> <AiFillHome /> </a>
      <a href='#about' onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}  > <FaUserGraduate /> </a>
      <a href='#experience' onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''} > <BsFillJournalBookmarkFill /> </a>
      <a href='#portfolio' onClick={() => setActiveNav('#portfolio')} className={activeNav === '#portfolio' ? 'active' : ''} > <CgWebsite /> </a>
      <a href='#contact' onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''} > <BiSolidContact /> </a>
    
    </nav>
    </div>
  )
}

export default SettingNav
