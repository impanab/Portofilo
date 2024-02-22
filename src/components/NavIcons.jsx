import { FaArrowUp } from 'react-icons/fa';
import { Link } from 'react-scroll';

import React from 'react'

function NavIcons() {
  return (
    <div style={{padding:'5px 5px',margin:'20px 10px',background:'rgba(255, 255, 255, 0.318)',borderRadius:'10px'}}>
       <Link to='/' style={{textDecoration:'none',color:'black'}}>
    <FaArrowUp /> Back
  </Link>
    </div>
  )
}

export default NavIcons
