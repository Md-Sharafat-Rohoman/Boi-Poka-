import React, { use } from 'react';
// import { useLoaderData } from 'react-router';
import { FaStarHalfStroke } from "react-icons/fa6";
import { Link } from 'react-router';

const Book = ({ book }) => {
    // console.log(book);
    const { bookId, bookName, author, image, review, totalPages, rating, category, tags, publisher, yearOfPublishing } = book;
   
    return (
        <Link to={`/booksDetails/${bookId}`}>
            <div className="card bg-base-100 shadow-sm p-3 border border-gray-200">
                <figure className='bg-gray-200'>
                    <img className='w-[150px] h-[200px] p-5'
                        src={image}
                        alt="Shoes" />
                </figure>
                <div className="card-body">
                    <div className='flex gap-5'>
                        {
                            tags.map(tag => <button className='btn text-green-500'>{tag}</button>)
                        }
                    </div>
                    <h2 className="card-title">
                        {bookName}
                        <div className="badge badge-secondary">{totalPages}</div>
                    </h2>
                    <p>By : {author}</p>
                    <div className='border-t-2 border-dashed border-gray-300'>

                    </div>
                    <div className="flex justify-between">
                        <div className="badge badge-outline">{category}</div>
                        <div className="badge badge-outline">{rating} <FaStarHalfStroke /> </div>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default Book;
