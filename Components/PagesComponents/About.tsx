import React from 'react'

function About() {
    return (
        <>
            <div className='flex flex-col mx-auto max-w-2xl md:px-4 px-8 mt-8'>
                <h2 className='text-xl font-medium text-slate-100 '>About me.</h2>
            </div>
            <ul className="mt-2 flex flex-col gap-2 list-inside list-disc pl-4 text-base tracking-tight  text-slate-200 mx-auto max-w-2xl md:px-4 px-4">
                <li>Hi, I am Govind Tiwari, a Full-stack Developer passionate about creating and delivering projects that make a real-world impact.</li>
                <li>I specialize in full-stack development with Next.js and Express.js, using TypeScript for type safety. I have experience with modern web technologies and tools.
                </li>
                <li>Have an idea, want to collaborate, or have a job opportunity? Feel free to message me! I&#39;m always excited to connect and work on great projects. <a href='mailto:108tiwari.g@gmai.com' className='text-slate-100 underline'>Contact me</a></li>
            </ul>
        </>
    )
}

export default About