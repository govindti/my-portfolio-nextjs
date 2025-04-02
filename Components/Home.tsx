// "use client"
// import React from 'react'
// import TwitterIcon from '@mui/icons-material/Twitter';
// import LinkedInIcon from '@mui/icons-material/LinkedIn';
// import GitHubIcon from '@mui/icons-material/GitHub';
// import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
// function Home() {
//     return (
//         <div className='flex justify-between mt-8 md:px-4 lg:px-8 '>
//             <h1 className="text-xl font-semi-bold text-slate-200">Hi, I'm Govind Tiwari 👋</h1>
//             <div className="text-base flex gap-3 items-center">
//                 <div className='flex flex-col md:flex-row gap-3 items-center'>
//                     <a href="https://twitter.com/tiwari_govind" target="_blank" rel="noopener noreferrer">
//                         <TwitterIcon className='text-slate-200 hover:text-slate-400 transition duration-300 ease-in-out' />
//                     </a>
//                     <a href="https://www.linkedin.com/in/govindtiwari/" target="_blank" rel="noopener noreferrer">
//                         <LinkedInIcon className='text-slate-200 hover:text-slate-400 transition duration-300 ease-in-out' />
//                     </a>
//                     <a href='https://www.github.com/tiwari-govind' target="_blank" rel="noopener noreferrer">
//                         <GitHubIcon className='text-slate-200 hover:text-slate-400 transition duration-300 ease-in-out' />
//                     </a>
//                     <a href='https://drive.google.com/file/d/1vX0g2j4x8qk3J6b5z7Z5z5z5z5z5z5/view?usp=sharing' target="_blank" rel="noopener noreferrer">
//                         <InsertDriveFileIcon className='text-slate-200 hover:text-slate-400 transition duration-300 ease-in-out' />
//                     </a>
//                     <a href='mailto:108tiwari.g@gmail.com' target="_blank" rel="noopener noreferrer" className='text-slate-300 hover:text-slate-200 hover:underline transition duration-300 ease-in-out'>
//                         108tiwari.g@gmail.com
//                     </a>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Home

"use client"
import React from 'react'
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';

function Home() {
    return (
        <div className="flex justify-between mt-8 md:px-4 lg:px-8 ">
            <h1 className="text-xl font-semibold text-slate-200 ">Hi, I'm Govind Tiwari 👋</h1>
            <div className="text-base flex gap-3 items-center">
                <div className="flex flex-col md:flex-row gap-3 items-center">
                    <a href="https://twitter.com/tiwari_govind" target="_blank" rel="noopener noreferrer" className="text-slate-200 hover:text-slate-400 transition duration-300 ease-in-out">
                        <TwitterIcon />
                    </a>
                    <a href="https://www.linkedin.com/in/govindtiwari/" target="_blank" rel="noopener noreferrer" className="text-slate-200 hover:text-slate-400 transition duration-300 ease-in-out">
                        <LinkedInIcon />
                    </a>
                    <a href='https://www.github.com/tiwari-govind' target="_blank" rel="noopener noreferrer" className="text-slate-200 hover:text-slate-400 transition duration-300 ease-in-out">
                        <GitHubIcon />
                    </a>
                    <a href='https://drive.google.com/file/d/1vX0g2j4x8qk3J6b5z7Z5z5z5z5z5z5/view?usp=sharing' target="_blank" rel="noopener noreferrer" className="text-slate-200 hover:text-slate-400 transition duration-300 ease-in-out">
                        <InsertDriveFileIcon />
                    </a>
                    <a href='mailto:108tiwari.g@gmail.com' target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-slate-200 hover:underline transition duration-300 ease-in-out">
                        108tiwari.g@gmail.com
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Home;
