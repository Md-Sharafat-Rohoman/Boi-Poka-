import React, { Suspense } from 'react';
import Book from './Book';
// import Book from './Book';
// import { useLoaderData } from 'react-router';

const Books = ({ data }) => {

    return (
        <div>
            <h1 className='text-5xl font-bold my-20 text-center'>this is books</h1>
            <Suspense fallback={<div>Loading...</div>}>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                    {
                        data.map(book => <Book key={book.bookId} book={book}></Book>)
                    }
                </div>
            </Suspense>
        </div>
    );
};

export default Books;