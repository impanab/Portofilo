import React from 'react';
import { Link } from 'react-scroll';
import { FaHome, FaUser, FaGraduationCap, FaTools, FaProjectDiagram, FaEnvelope } from 'react-icons/fa';
import nav from './css/Navbar.module.css';

const List = ({showList}) => {
  return (
    <ul className={nav.navbar}>
      <li className={nav.l1}>
        <Link to='/' className={nav.link} 
        smooth={true} duration={200}>
          <FaHome /> Home
        </Link>
      </li>
      <li>
        <Link to='about' className={nav.link} 
        smooth={true} duration={200}>
          <FaUser /> About
        </Link>
      </li>
      <li>
        <Link to='education' className={nav.link} 
        smooth={true} duration={200}>
          <FaGraduationCap /> Education
        </Link>
      </li>
      <li>
        <Link to='skill' className={nav.link} 
        smooth={true} duration={200}>
          <FaTools /> Skills
        </Link>
      </li>
      <li>
        <Link to='project' className={nav.link} 
        smooth={true} duration={200}>
          <FaProjectDiagram /> Project
        </Link>
      </li>
      <li>
        <Link to='contact' className={nav.link} 
        smooth={true} duration={200}>
          <FaEnvelope /> Contact
        </Link>
      </li>
    </ul>
  );
};

export default List;