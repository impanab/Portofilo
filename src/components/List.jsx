import React from 'react'
import { Link } from 'react-router-dom'
import nav from './css/Navbar.module.css'
const List = () => {
  return (
 
          <ul className={nav.navbar}><li><Link to='/' className={nav.link1} >Home</Link></li>
            <li> <Link to='/about' className={nav.link} >About</Link></li>
            <li><Link to='/education' className={nav.link} >Education</Link></li>
            <li > <Link to='/skill' className={nav.link}>Skill</Link></li>
            <li><Link to='/project' className={nav.link}>Project</Link></li>
            <li><Link to='/contact' className={nav.link}>Contact</Link></li>
            </ul>

  )
}

export default List