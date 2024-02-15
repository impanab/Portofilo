import React from 'react'
import './css/Home.css'
import Navbar from './Navbar'

import About from './About'
import Education from './Education'
import Skills from './Skills'
import Contact from './Contact'
import { Projects } from './Projects'


function Home() {



  return (
    <div> 
  <Navbar/>
  {/* <Slide/> */}
    <About/>
    <Education/>
    <Skills/>
    <Projects/>
    <Contact/>
    </div>
  )
}

export default Home