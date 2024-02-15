import React from 'react'
import style from './css/Skills.module.css'
function Skills() {
  let skills=[{title:"FRONT END TECHNOLOGIES",content:"I have knowledge of Web development Skill Like HTML, CSS, JAVASCRIPT, BOOTSTRAP, REACT-JS",
   class:style.skill_card_even},{title:"BACK END TECHNOLOGIES",content:"I have good knowledge of  Node.js,Express.js", class:style.skill_card_odd},
{title:"DATABASE TECHNOLOGIES",content:"I have knowledge of Database Technology Like MONGO-DB,SQL", class:style.skill_card_odd},
{title:"PROGRAMLING LANGUAGE",content:"I also have decent hand in Programing  JAVA, JAVASCRIPT ,PYTHON", class:style.skill_card_even}]
  return (<div style={{marginTop:'100px'}}>
  <label className={style.lable}>HERE ARE SOME OF MY EXPERTISE</label>
  <div className={style.skill_container}>
 
 {skills.map((ele,i)=>{
  return <div key={i} className={ele.class}>
     <h3 style={{textAlign:'center'}}>{ele.title}</h3>
     <p style={{textAlign:'center',lineHeight:'30px',fontSize:'1rem'}}>{ele.content}</p>
   </div>
 })}
 </div></div>
  )
}

export default Skills