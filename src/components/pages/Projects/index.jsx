import React from 'react';
import Header from '../../Header';
import { projects } from './ProjectList';
import './Projects.css'


function Projects() {
    return (
        <>
            <Header/>
            <div className="projects-wrapper">
                <h1>Projects</h1>
                <div className="grid">
                    {
                        projects.map((project,index)=>(
                            <div className='item' key={index}>
                                <img src={project.image} alt="project-image"/>
                                <div className='descript'>
                                    <h5 className='project_name'>{project.name}</h5>
                                    <div className='git_link'>
                                        <a to={project.gitUrl}>Git_Hub</a>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>  
        </>
    )
}

export default Projects
