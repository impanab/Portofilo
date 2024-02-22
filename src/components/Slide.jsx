import React from 'react'
import './css/Slide.css'
import { Link } from 'react-scroll'
import Icons from './Icons'
import {Link as DomLink} from 'react-router-dom'

function Slide({showList}) {
 
  return (
   <>
    <section className='background-div ' onClick={showList}>
     <div className='name-sec'>
      <p>Hello! It's Me</p>
      <h1>Impana B</h1>
      <h2>And I'm a Frontend Developer</h2>
    </div>
    <div className='button-sec'>
      <DomLink to='https://drive.google.com/file/d/1mQDy1rPocCBFaZ4785dDArBjnbEpLBR4/view?usp=drive_link' className='link'>Resume</DomLink>
      <Link to='contact' className='link'>Contact</Link>
    </div>
   <div className='icon'>
     <Icons/>
   </div>
 </section></>
  )
}

export default Slide



