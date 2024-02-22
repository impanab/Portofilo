import React from 'react'
import './css/Projects.css'
import pimage from './image/portfoli.png'

let projectDetailes=[{title:'Personal Portfolio',
description:'Portfolio website developed with React.',
link:'https://impana-b-portfolio.netlify.app/',image:pimage},
{title:'Example Project',
description:'This is an example.',link:'"https://example.com"'}, 
]

export const Projects = () => {
    return (
    <div id='project'> <p className='head'>My work</p><br/>
        <label className='lable'>Projects</label>
        <div className='card-container'>
        {projectDetailes.map(({title,description,link,image},i)=>{
     return <div className="project-card" key={i}> <h2>{title}</h2>
               <p>{description}</p>
            <a href={link} target="_blank" rel="noopener noreferrer">View Project</a>
              </div> }) }
          </div>
        </div>
            
      )
}
