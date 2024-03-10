import React from 'react'
import './css/Slide.css'
import { Link } from 'react-scroll'
import Icons from './Icons'
import {Link as DomLink} from 'react-router-dom'
import { TypeAnimation } from 'react-type-animation';
// import image from './image/'
function Slide({showList}) {
 
  return (
   <>
    <section className='background-div ' onClick={showList}>
     <div className='name-sec'>
     {/* <img src={image} height={200} width={200} style={{borderRadius:'180px', border:'6px solid #041119' ,color:'#041119'}}/> */}
      <p>Hello! It's Me</p>
      <h1>Impana B</h1>
      <h2>And I`m a </h2>
      <TypeAnimation
      sequence={[ 
        ' Frontend Developer',
        1000, 
        ' Backend Developer',
        1000,
        ' Fullstack Developer',
        1000,
      ]}
      wrapper="span"
      speed={20}
      style={{ fontSize: '2rem',fontWeight:'bold', display: 'inline-block',color:'#02131e',padding: '16px 3px'}}
      repeat={Infinity}
    />
      
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



