import React from 'react';
import Nav from '../Shared/Nav';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <>
        <div className='flex'>
        <div>
        <Nav />
        </div>    
        <div className='w-5/6 bg-neutral-800 text-white'>
        <Outlet />
        </div>
        </div>
        </>
    );
};

export default Main;