import React from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineFileProtect, AiOutlineHome, AiOutlineMail } from "react-icons/ai";
import { MdOutlineFeaturedPlayList } from "react-icons/md";
import { GrProjects } from "react-icons/gr";
import { ImProfile } from "react-icons/im";

const Nav = () => {
    const navElements = (
        <>
        <Link to='/'><li className='flex items-center gap-2 text-xl text-white'><AiOutlineHome /> Home</li></Link>
        <Link to='/about-me'><li className='flex items-center gap-2 text-xl text-white my-4'><MdOutlineFeaturedPlayList />About</li></Link>
        <Link to='/features'><li className='flex items-center gap-2 text-xl text-white my-4'><MdOutlineFeaturedPlayList />Features</li></Link>
        <Link to='/my-skills'><li className='flex items-center gap-2 text-xl text-white'><AiOutlineFileProtect />Skills</li></Link>
        <Link to='/my-projects'><li className='flex items-center gap-2 text-xl text-white my-4'><GrProjects />Projects</li></Link>
        <Link to='/resume'><li className='flex items-center gap-2 text-xl text-white'><ImProfile />Resume</li></Link>
        <Link to='/contact'><li className='flex items-center gap-2 text-xl text-white my-4'><AiOutlineMail />Contact</li></Link>
        </>
    )
    return (
        <>
        <div className='bg-neutral-900 w-64 pt-5 px-5 h-screen'>
        <div>
        <img src="https://i.ibb.co/b7TSbTH/shanta2.jpg" alt="" className='rounded-full w-48 h-48 border-white border-4'/>
        </div>
       <div className='mt-10 px-10'>
       <ul>
            {navElements}
        </ul>
       </div>
        </div>
        </>
    );
};

export default Nav;