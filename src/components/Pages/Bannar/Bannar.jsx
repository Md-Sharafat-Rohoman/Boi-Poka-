import React from 'react';
import booksImage from '../../../../public/images/books.jpg'
import './bannar.css'

const Bannar = () => {
    return (
        <div className='bannar-container sm:block'>
            <div>
                <h1 className='text-5xl font-bold w-[500px]'>Books to freshen up your bookshelf</h1>
                <button className='btn btn-success '>View The List</button>
            </div>
            <div>
                <img className='rounded-2xl' src={booksImage} alt="" />
            </div>
        </div>
    );
};

export default Bannar;