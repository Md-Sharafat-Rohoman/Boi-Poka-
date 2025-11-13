import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getBookStore } from '../Utilitys/Utilitys';
import Book from '../Books/Book';


const ReadList = () => {
    const [readList, setReadList] = useState([]);
    const [sort, setSort] = useState('');

    const data = useLoaderData();
    console.log(data)

    useEffect(() => {
        const storeBookData = getBookStore();
        console.log(storeBookData);
        const convertedStoreBookData = storeBookData.map(id => parseInt(id));
        console.log(convertedStoreBookData);
        const myBookList = data.filter(book => convertedStoreBookData.includes(book.bookId));
        console.log(myBookList);
        setReadList(myBookList);

    }, [])

    const handleSort  = (type) =>{
        setSort(type);
        if(type === 'pages'){
            const sortByPages = [...readList].sort((a,b) => a.pages - b.pages);
            setReadList(sortByPages);
        }
        if(type === 'rating'){
            const sortByRating = [...readList].sort((a,b) => b.rating - a.rating);
            setReadList(sortByRating);
        }
    }



    return (
        <div>
            <details className="dropdown">
                <summary className="btn m-1">Sort By : {sort? sort: ''}</summary>
                <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                    <li><a onClick={()=> handleSort('sort')}>pages</a></li>
                    <li><a onClick={()=> handleSort('rating')}>rating</a></li>
                </ul>
            </details>
            <Tabs>
                <TabList>
                    <Tab>Read Book List</Tab>
                    <Tab>My wish list</Tab>
                </TabList>

                <TabPanel>
                    <h2>Book I read : {readList.length}</h2>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                        {
                            readList.map(book => <Book book={book}></Book>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <h2>My wish list</h2>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default ReadList;