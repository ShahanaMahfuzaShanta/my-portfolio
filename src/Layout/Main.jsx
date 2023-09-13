import React from 'react';
import Nav from '../Shared/Nav';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <>
        <div className='flex'>
        <Nav />
        <Outlet />
        </div>
        </>
    );
};

export default Main;