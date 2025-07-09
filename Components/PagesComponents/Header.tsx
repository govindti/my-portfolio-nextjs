"use client"
import React from 'react'
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';

function Header() {
    return (
        <div className="flex flex-col md:flex-row justify-between items-center mt-10 mx-auto max-w-2xl md:px-4 px-8">
            <div className="text-center">
                <h1 className="text-xl font-semibold text-slate-100 ">Hi, I&#39;m Govind 👋</h1>
            </div>
            <div className="text-base flex flex-col md:flex-row gap-3 items-center md:items-start">
                <div className="flex flex-center md:flex-row gap-3 items-center">
                    <a href="https://x.com/Govind_tiwari_" target="_blank" rel="noopener noreferrer" className="text-slate-200 hover:text-slate-400 transition duration-300 ease-in-out">
                        <TwitterIcon />
                    </a>
                    <a href="https://www.linkedin.com/in/govindtiwri" target="_blank" rel="noopener noreferrer" className="text-slate-200 hover:text-slate-400 transition duration-300 ease-in-out">
                        <LinkedInIcon />
                    </a>
                    <a href='https://github.com/govindti' target="_blank" rel="noopener noreferrer" className="text-slate-200 hover:text-slate-400 transition duration-300 ease-in-out">
                        <GitHubIcon />
                    </a>
                    <a href='https://drive.google.com/file/d/1E3R4ITWCB9P5WlMEIj8KTg8m_2U2JjBH/view' target="_blank" rel="noopener noreferrer" className="text-slate-200 hover:text-slate-400 transition duration-300 ease-in-out">
                        <InsertDriveFileIcon />
                    </a>
                </div>
                <div className='items-center flex flex-center'>
                    <a href='mailto:108tiwari.g@gmail.com' target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-slate-200 hover:underline transition duration-300 ease-in-out">
                        108tiwari.g@gmail.com
                    </a>
                </div>
                
            </div>
        </div>
    )
}
export default Header;

