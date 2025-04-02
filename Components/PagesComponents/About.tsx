import React from 'react'

function About() {
    return (
        <>
            <div className='mt-9 flex flex-col  '>
                <h2 className='text-xl font-medium text-slate-200 '>About me.</h2>
            </div>
            <ul className="mt-2 list-inside list-disc pl-4 text-base tracking-tight  text-slate-300">
                <li>Hi, I am Govind Tiwari, a Full-stack Developer passionate about creating and delivering projects that make a real-world impact.</li>
                <li>I specialize in full-stack development with Next.js and Express.js, using TypeScript for type safety. I have experience with modern web technologies and tools.
                </li>
                <li>Have an idea, want to collaborate, or have an Job opportunity? Feel free to message me! I'm always excited to connect and work on great projects. <a href='mailto:108tiwari.g@gmai.com' className='text-slate-100 underline'>Contact me</a></li>
            </ul>
        </>
    )
}

export default About