import React,{useState, useEffect} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faList } from '@fortawesome/free-solid-svg-icons'
import { faTimes,faXmark } from '@fortawesome/free-solid-svg-icons';
import nav from './css/Navbar.module.css'
import List from './List'
import Slide from './Slide'
import About from './About'
import Education from './Education'
import Skills from './Skills'
import Contact from './Contact'
import { Projects } from './Projects'



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
  let showNav=()=>{
    setList(!list)
  }

  window.addEventListener('resize',showIcon);
 
  return (
  <><div className={nav.maindiv} id='/'>
    <nav className={nav.nv}>  
    
     {list&&<FontAwesomeIcon icon={show?faXmark:faList} onClick={()=>{setShow(!show)}} className={nav.icon}/>}
     {show && <List/>}
    </nav>
   </div>
   <Slide showList={showList} />
   <About   />
    <Education  />
    <Skills  />
    <Projects  />
    <Contact  />
   </>
  )
}

export default Navbar