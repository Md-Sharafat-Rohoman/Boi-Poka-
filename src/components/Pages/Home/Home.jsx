import React from 'react';
import Bannar from '../Bannar/Bannar';
import Books from '../Books/Books';
import { useLoaderData } from 'react-router';

const Home = () => {
    const data = useLoaderData();
    // console.log(data);
    return (
        <div className=''>
            {/* <h1>this is home</h1> */}
            <Bannar></Bannar>
            <Books data={data}></Books>
        </div>
    );
};

export default Home;