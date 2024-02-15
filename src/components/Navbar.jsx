import React,{useState, useEffect} from 'react'
// import { HashLink as Link } from 'react-router-hash-link';
// import { Link } from 'react-router-dom'
// import { Link } from 'react-scroll'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faList } from '@fortawesome/free-solid-svg-icons'
import nav from './css/Navbar.module.css'

import List from './List'
import Slide from './Slide'

const Navbar = () => {
  const [list, setList] = useState(false);
  const [show,setShow]=useState(false)


  const showIcon=()=>{
    if(window.innerWidth<=960){
      setList(true)
    } else {
      setList(false)
      setShow(true)
    }
  }
  useEffect(()=>{
    showIcon();
  },[])

  const showList=()=>{
    if(window.innerWidth<=960){
      setShow(false)
    } 
  }


  window.addEventListener('resize',showIcon);

  // console.log(show)
 
  return (
  <>
   <div className={nav.maindiv}>
    <nav className={nav.nv}>  
      {list&& <FontAwesomeIcon icon={faList} onClick={()=>{setShow(!show)}} className={nav.icon}/>}
      {console.log(show)}
    {show && <List/>}
    </nav>
   </div>
   <Slide showList={showList}/></>
  )
}

export default Navbar