import React from 'react'
import style from './css/Skills.module.css'

let skills=[{title:"FRONT END TECHNOLOGY PROFICIENCY",
content:"I have knowledge of Web development Skills Like HTML, CSS, JAVASCRIPT, BOOTSTRAP, REACT.JS",class:style.skill_card_even},
{title:"BACK END TECHNOLOGY PROFICIENCY",content:"I am well-versed in back-end technologies, particularly skilled in Node.js and Express.js", 
class:style.skill_card_odd},
{title:"DATABASE TECHNOLOGIES",content:"I am familiar with Database Technology Like MongoDB and SQL", 
class:style.skill_card_odd},
{title:"PROGRAMLING LANGUAGE",content:"I am proficient in Programing with JAVA, JAVASCRIPT and PYTHON",
class:style.skill_card_even}]

function Skills() {
  
  return (
  <div  id='skill' className={style.skill}>
  <label className={style.lable}>HERE ARE SOME OF MY EXPERTISE</label>
  <div className={style.skill_container}>
  {skills.map((ele,i)=>{
  return <div key={i} className={ele.class}>
     <h3 style={{textAlign:'center'}}>{ele.title}</h3>
     <p style={{textAlign:'center',lineHeight:'30px',fontSize:'1rem'}}>{ele.content}</p>
   </div>
 })}
 </div>
</div>
  )
}
export default Skills