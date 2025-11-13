import React from 'react';
import { createBrowserRouter } from 'react-router';
import Root from '../Root/Root';
import Home from '../Pages/Home/Home';
import About from '../Pages/About/About';
import Books from '../Pages/Books/Books';
import BooksDetails from '../Pages/BooksDetails/BooksDetails';
import ReadList from '../Pages/ReadList/ReadList';

const router = createBrowserRouter([
    {
        path: '/',
        Component: Root,
        children:[
            {
                index: true,
                loader: () => fetch('booksData.json'),
                Component: Home
            },
            {
                path: '/about',
                Component: About
            },
            {
                path: '/readList',
                loader: () => fetch('booksData.json'),
                Component: ReadList
            },
            {
                path: '/booksDetails/:bookId',
                loader: () => fetch('booksData.json'),
                Component: BooksDetails
            },


        {
            path: '*',
            element: <div className='flex justify-center items-center'><h1>404 Not Found</h1></div>
        }
        ]
        
    }
])

export default router;