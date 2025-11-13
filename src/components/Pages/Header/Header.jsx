import React from 'react';
import { NavLink } from 'react-router';
import './Header.css';


const likes = <>
    {/* <li><a>Item 1</a></li>
    <li><a>Item 3</a></li> */}
    <NavLink to="/">Home</NavLink>
    <NavLink to="/about">Listed Books</NavLink>
    <NavLink to="/readList">Pages to Read</NavLink>
</>

const Header = () => {



    return (
        // <div>

        //     <nav className='flex justify-between items-center'>
        //         <div>
        //             <h1 className='text-2xl font-bold'>Book Vibe</h1>
        //         </div>
        //         <div>
        //             <NavLink to="/">Home</NavLink>
        //             <NavLink to="/about">Listed Books</NavLink>
        //             <NavLink to="/pages-to-read">Pages to Read</NavLink>
        //         </div>
        //         <div>
        //             <button className="btn btn-active btn-success">Success</button>
        //             <button className="btn btn-active btn-success">Success</button>
        //         </div>
        //     </nav>
        // </div>
        <div className="navbar bg-base-100 shadow-sm">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {
                            likes
                        }
                    </ul>
                </div>
                <a className="font-bold">Book Vibe</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {
                        likes
                    }
                </ul>
            </div>
            <div className="navbar-end">
                <button className="btn btn-active bg-[#23BE1A] mr-2">Sign In</button>
                <button className="btn btn-active bg-[#59C6D2]">Sign Up</button>
            </div>
        </div>
    );
};

export default Header;