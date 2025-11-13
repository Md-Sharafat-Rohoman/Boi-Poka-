import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import { addToStoreBD } from '../Utilitys/Utilitys';

import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
//   import React from 'react';

  import { ToastContainer, toast } from 'react-toastify';

const MySwal = withReactContent(Swal)

const BooksDetails = () => {
    const id = parseInt(useParams().bookId);
    // console.log(typeof id);
    const data = useLoaderData();
    // console.log(data,id)
    const singleBook = data.find(book => book.bookId === id);
    console.log(singleBook, id);
    const { image, bookName } = singleBook;


    const handleMarkAsRead = (id) => {
        alert('Book marked as read!', id);

        // MySwal.fire({
        //     title: <p>Hello World</p>,
        //     didOpen: () => {
        //         // `MySwal` is a subclass of `Swal` with all the same instance & static methods
        //         MySwal.showLoading()
        //     },
        // }).then(() => {
        //     return MySwal.fire(<p>Shorthand works too</p>)
        // })\
        // Swal.fire({
        //     title: "Good job!",
        //     text: "You clicked the button!",
        //     icon: "success"
        // });
        toast("Wow so easy!");
        
        addToStoreBD(id);

    }
    return (
        <div className='w-2/3 mx-auto'>
            <img className='w-2xl' src={image} alt="" />
            <h4>{bookName}</h4>
            <ToastContainer />
            <button onClick={() => handleMarkAsRead(id)} className='btn btn-accent mr-3'>Mark as Read</button>
            <button className='btn btn-info ml-2'>Add to Wish List</button>

        </div>
    );
};

export default BooksDetails;