import React from 'react';
import Headings from '../../Component/Headings';

const Resume = () => {
    return (
        <>
        <div className="bg-gray-100 w-5/6">
            <Headings heading="My Resume"></Headings>
            <div className='grid grid-cols-4 p-10 gap-5'>
                <button className='border-2 h-16 rounded-md bg-slate-200'>Education</button>
                <button>Professional Skills</button>
                <button>Experiences</button>
                <button>Interview</button>
            </div>
        </div>
        </>
    );
};

export default Resume;