import React from 'react';
import { useNavigate } from 'react-router-dom';
import TypeWriter from './TypeWriter';
//import Split from 'split.js';


const Me = () => {
    const navigate = useNavigate();
    const handleContact = () => {
        navigate('/contact')
    }
    return (
        <>
        <div className=''>
        <div className="bg-[url('https://images.unsplash.com/photo-1607705703571-c5a8695f18f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHByb2dyYW1tZXIlMjBnaXJsfGVufDB8fDB8fHww&auto=format&fit=crop&w=1200&h=600')] w-[1110px] h-screen">
           <div className='grid justify-items-center mx-auto'>
           <p className='text-8xl font-bold text-white mt-32'>I'm <TypeWriter text="Shanta Mahfuza" delay={200} infinite /></p>
           <p className='text-white text-4xl  my-8'>I am a <span className='text-green-400 '>Web Developer</span></p>
           <button onClick={handleContact} className='text-green-400 text-lg font-bold bg-white hover:bg-green-400 hover:text-white rounded-md w-40 h-12 mx-auto'>Contact Me</button>
           </div>
          
        </div>
        </div>
        </>
    );
};

export default Me;