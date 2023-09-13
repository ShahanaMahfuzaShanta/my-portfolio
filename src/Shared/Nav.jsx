import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
    const navElements = (
        <>
        <Link to='/'><li>Home</li></Link>
        <Link to='/features'><li>Features</li></Link>
        <Link to='/my-skills'><li>Skills</li></Link>
        <Link to='/my-projects'><li>Projects</li></Link>
        <Link to='/resume'><li>Resume</li></Link>
        <Link to='/contact'><li>Contact</li></Link>
        </>
    )
    return (
        <>
        <div className='grid bg-gray-200 w-64 justify-items-center py-10'>
        <div>
        <img src="https://i.ibb.co/b7TSbTH/shanta2.jpg" alt="" className='rounded-full w-48 h-48 border-white border-4'/>
        </div>
       <div className='mt-5'>
       <ul>
            {navElements}
        </ul>
       </div>
        </div>
        </>
    );
};

export default Nav;