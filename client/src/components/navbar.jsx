import { useState } from "react";
import { GoPerson } from "react-icons/go";
import { IoMdSearch } from "react-icons/io";
import { IoBagHandleOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const Navbar = ({ openCart }) => {


    return (
        <nav className='bg-white text-gray-700  flex flex-row justify-between items-center fixed w-full z-50 p-9 pl-15 pr-16 h-16 px-10 border border-gray-300'
            style={{ boxShadow: '0px 13px 30px rgba(0,0,0,0.1)' }}>

            <div className='flex gap-6 items-center font-semibold'>
                <div
                    className="w-20 h-18"
                    style={{
                        backgroundImage: "url('/Logo.png')",
                        backgroundSize: 'contain',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                    }}
                >
                </div>

                <Link to="/">
                    <h1 className='flex items-center gap-1.5 cursor-pointer p-1 pl-2 pr-2
                               hover:bg-teal-700 hover:rounded-3xl hover:text-white'>Home</h1>
                </Link>

                <Link to="/">
                    <h1 className=' flex items-center gap-1.5 cursor-pointer p-1 pl-2 pr-2
                               hover:bg-teal-700 hover:rounded-3xl hover:text-white'>Products</h1>
                </Link>

                <Link to="/">
                    <h1 className='flex items-center gap-1.5 cursor-pointer p-1 pl-2 pr-2
                               hover:bg-teal-700 hover:rounded-3xl hover:text-white'>Categories</h1>
                </Link>

            </div>


            <div className='flex gap-6 font-semibold items-center'>

                <div className='flex items-center gap-1.5 cursor-pointer p-1 pl-1 pr-2
                               hover:bg-teal-700 hover:rounded-3xl hover:text-white'>
                    <IoMdSearch size={20} />
                    <p>Search</p>
                </div>

                <Link to="/login">
                    <div className=' flex items-center gap-1.5 cursor-pointer p-1 pl-2 pr-2
                               hover:bg-teal-700 hover:rounded-3xl hover:text-white'>
                        <GoPerson />
                        <p>Login</p>
                    </div>
                </Link>


                <button className='text-white flex items-center p-1 pr-2 cursor-pointer' onClick={openCart}>
                    <IoBagHandleOutline size={20} className="text-gray-700" />
                    <p className='text-xs text-gray-700'>0</p>
                </button>

            </div>
        </nav>
    )
}

export default Navbar