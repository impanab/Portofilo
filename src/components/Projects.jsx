import React, { Fragment } from 'react'
import './css/Projects.css'
import pimage from './image/portfoli.png'

let projectDetailes=[{title:'Personal Portfolio',
description:'Portfolio website developed with React.',
link:'https://impana-b-portfolio.netlify.app/',image:pimage},
{title:'Example Project',
description:'This is an example project card with React.',link:'"https://example.com"'}, 
]

export const Projects = () => {
 
    return (
    <> <p className='head'>My work</p><br/>
        <label className='lable'>Projects</label>
        <div className='card-container'>
        {projectDetailes.map(({title,description,link,image},i)=>{
     return <div className="project-card" key={i}> <h2>{title}</h2>
      {/* <img src={image} alt='not found' height={100} width={300}/> */}
    <p>{description}</p>
    <a href={link} target="_blank" rel="noopener noreferrer">View Project</a>
    </div> }) }
        </div>
        </>
            
      )
}
