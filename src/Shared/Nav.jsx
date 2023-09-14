import React from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineFileProtect, AiOutlineHome, AiOutlineMail } from "react-icons/ai";
import { MdOutlineFeaturedPlayList } from "react-icons/md";
import { GrProjects } from "react-icons/gr";
import { ImProfile } from "react-icons/im";

const Nav = () => {
    const navElements = (
        <>
        <Link to='/'><li className='flex items-center gap-2 text-xl text-gray-700'><AiOutlineHome /> Home</li></Link>
        <Link to='/features'><li className='flex items-center gap-2 text-xl text-gray-700 my-4'><MdOutlineFeaturedPlayList />Features</li></Link>
        <Link to='/my-skills'><li className='flex items-center gap-2 text-xl text-gray-700'><AiOutlineFileProtect />Skills</li></Link>
        <Link to='/my-projects'><li className='flex items-center gap-2 text-xl text-gray-700 my-4'><GrProjects />Projects</li></Link>
        <Link to='/resume'><li className='flex items-center gap-2 text-xl text-gray-700'><ImProfile />Resume</li></Link>
        <Link to='/contact'><li className='flex items-center gap-2 text-xl text-gray-700 my-4'><AiOutlineMail />Contact</li></Link>
        </>
    )
    return (
        <>
        <div className='grid bg-gray-200 w-64 justify-items-center py-10'>
        <div>
        <img src="https://i.ibb.co/b7TSbTH/shanta2.jpg" alt="" className='rounded-full w-48 h-48 border-white border-4'/>
        </div>
       <div className='mt-10'>
       <ul>
            {navElements}
        </ul>
       </div>
        </div>
        </>
    );
};

export default Nav;