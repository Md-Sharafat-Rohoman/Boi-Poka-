import React from 'react';
import Header from '../Pages/Header/Header';
import { Outlet } from 'react-router';
import Footer from '../Pages/Footer/Footer';

const Root = () => {
    return (
        <div className='max-w-6xl mx-auto py-5'>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;