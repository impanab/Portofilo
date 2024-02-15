import React from 'react'
import './css/Education.css'

function Education() {
    let educations=[{
        yop:'2022-2023',
        degree:'Post Graduation at Bangalore Institute of technology ',
        clg:"I have earned my Master's degree in Computer Applications (MCA).",
        cgpa:'80%'
    },{
        yop:'2020-2021',
        degree:'Undergraduation at Government first grade college Thirthahalli',
        clg:"I have graduated with a Bachelor's degree in Science (BSC), majoring in Computer Science.",
        cgpa:'72%'
    },{
        yop:'2017-2018',
    degree:'Higher Education ',
    clg:'I have completed my higher education from Government P U College Ripponpet.',
    cgpa:'66.66%'
}]
  return (
 <div className='education'>
    <label className='lableEdu'>Education</label>
    {educations.map((ele,i)=>{
        return <section className='edu-sec' key={i}><div className='edu'>
       
        <h4>{ele.degree}</h4>
        
        <p>{ele.clg}</p>
      </div> <div><h6>{ele.yop}</h6></div></section>
    })}
  </div>  
  )
}

export default Education