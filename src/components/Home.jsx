import React from 'react'
import './css/Home.css'
import Navbar from './Navbar'



function Home() {
  return (
    <div > 
    <Navbar/>
     
   
    </div>
  )
}

export default Home


// import './css/Home.css';
// import Navbar from './Navbar';
// import About from './About';
// import Education from './Education';
// import Skills from './Skills';
// import Contact from './Contact';
// import { Projects } from './Projects';
// import { Link } from 'react-scroll';
// import NavIcons from './NavIcons';

// function Home() {
//   return (
//     <div>
//       <Navbar />
//       <NavIcons />

//       <Link to="about" smooth={true} duration={500}>
//         About
//       </Link>

//       <Link to="education" smooth={true} duration={500}>
//         Education
//       </Link>

//       <Link to="skills" smooth={true} duration={500}>
//         Skills
//       </Link>

//       <Link to="projects" smooth={true} duration={500}>
//         Projects
//       </Link>

//       <Link to="contact" smooth={true} duration={500}>
//         Contact
//       </Link>

//       <About id="about" />
//       <Education id="education" />
//       <Skills id="skills" />
//       <Projects id="projects" />
//       <Contact id="contact" />
//     </div>
//   );
// }

// export default Home;

