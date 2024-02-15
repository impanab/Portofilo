import React from 'react'
import './css/Slide.css'
import { Link } from 'react-router-dom'
import Icons from './Icons'


function Slide({showList}) {
 
  return (
   <>
    <section className='background-div ' onClick={showList}>
   <div className='name-sec'>
    <p>Hello! It's Me</p>
      <h1>Impana B</h1>
      <h2>And I'm a Frontend Developer</h2></div>
      
      <div className='button-sec'>
        <Link to='https://drive.google.com/file/d/1zNVkd-MKujemes66rYBx0lBLMfYISvJm/view?usp=sharing' className='link'>Resume</Link>
        <Link to='/contact' className='link'>Contact</Link>
      </div>
   <div className='icon'>
   <Icons/>
   </div>

    </section></>
  )
}

export default Slide



