import React from 'react';

const Headings = ({ heading, sub_heading }) => {
  return (
    <>
      <div className='my-10 text-center relative text-white'>
        <p className='text-9xl opacity-10 font-bold uppercase relative z-10'>{heading}</p>
        <p className='text-4xl font-bold absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>{sub_heading}</p>
      </div>
    </>
  );
};

export default Headings;
