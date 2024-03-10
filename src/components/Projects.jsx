import React from 'react'
import './css/Projects.css'
import pimage from './image/Screenshot (140).png'

let projectDetailes=[{title:'Personal Portfolio',
description:'Portfolio website developed with React.',
link:'https://impana-b-portfolio.netlify.app/',image:pimage},
 
]

export const Projects = () => {
    return (
    <div id='project'> <p className='head'>My work</p><br/>
        <label className='lable'>Projects</label>
        <div className='card-container'>
        {projectDetailes.map(({title,description,link,image},i)=>{
     return <div className="project-card" key={i}> <h2>{title}</h2>
      <a href={link} target="_blank" rel="noopener noreferrer">
              <img src={image} height={150} width={300}/>
              View Project
              </a>
             <p>{description}</p>
              </div> }) }
          </div>
        </div>
            
      )
}
