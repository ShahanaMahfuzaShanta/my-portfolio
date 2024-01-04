import React from 'react';
import Headings from '../../Component/Headings';

const AboutMe = () => {
    return (
        <div className='p-10 overflow-y-auto'>
            <Headings heading="About Me" sub_heading="Know Me More" />
            <div className='flex justify-center gap-10'>
                <div className='w-[600px]'>
                <p className='text-2xl font-bold'>I'm <span className='text-green-400'>Shanta Mahfuza,</span> a Web Developer</p>
            <p className='text-lg text-slate-300 my-5 leading-relaxed'>I am a passionate and dedicated Frontend Developer with expertise in HTML, CSS, Tailwind, Bootstrap, JavaScript, React.js, and backend technologies like Node.js and MongoDB. My goal is to create seamless and user-friendly web applications that leave a lasting impression.</p>
                </div>
                <div className='w-1/3 text-lg font-semibold text-slate-200'>
                    <p className='py-2'>Name: Shahana Mahfuza Shanta</p>
                    
                    <p className='border border-r-0 border-l-0 border-gray-700 py-2'>Email: shantamahfuza2017@gmail.com</p>
                    <p className='py-2'>Age: 24</p>
                    <p className='border border-r-0 border-l-0 border-b-0 border-gray-700 py-2'>From: Dhaka, Bangladesh</p>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;