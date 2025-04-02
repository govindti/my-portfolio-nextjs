import React from 'react'
import ProjectsData from '../Data/ProjectsData'

function Projects() {
    return (
        <>
            <div className='mx-auto max-w-2xl md:px-4 px-8 mt-8'>
                <h2 className='text-xl font-medium text-slate-100 '>Projects</h2>
            </div>
            {ProjectsData.map((project) => (
                <div key={project.id} className='my-4 rounded-lg mx-auto max-w-2xl md:px-4'>
                    <h2>{project.id}. {project.title}</h2>
                    <p className='text-slate-200 mt-1 text-base tracking-tight'>{project.desc}</p>
                    <div className='mt-2'>
                        <div className='flex flex-wrap gap-2 mt-1'>
                            {project.skills.map((skill, index) => (
                                <div key={index} className='bg-slate-100 text-slate-800 p-1 border rounded shadow text-xs font-semibold'>
                                    {skill}
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className='mt-2 text-sm'>
                        {project.links.Github && (
                            <a href={project.links.Github} className='text-slate-100 hover:underline' target="_blank" rel="noopener noreferrer">
                                Github
                            </a>
                        )}
                        {project.links.Github && project.links.Live && <span className='mx-2'>|</span>}
                        {project.links.Live && (
                            <a href={project.links.Live} className='text-slate-100 hover:underline' target="_blank" rel="noopener noreferrer">
                                Live
                            </a>
                        )}
                    </div>
                </div>
            ))}
        </>
    )
}

export default Projects

