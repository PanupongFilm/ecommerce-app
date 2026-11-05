import { useState } from "react";
import { GoPerson } from "react-icons/go";
import { IoMdSearch } from "react-icons/io";
import { IoBagHandleOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

import { FaAngleDown } from "react-icons/fa";


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

                <div className="relative group">

                    <div className="flex flex-row cursor-pointer p-1 pl-2 pr-2 items-center justify-center
                     group-hover:bg-teal-700 group-hover:rounded-3xl group-hover:text-white">
                        <h1>Categories</h1>
                        <FaAngleDown size={18} />
                    </div>

                    <div className="absolute left-0 w-155 h-80 bg-white border border-gray-200 rounded-md shadow-md
                      opacity-0 invisible translate-y-4 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0
                      transition-all duration-200 z-10 pointer-events-auto">

                        <div className="flex flex-row justify-between items-start p-7 ">

                            <div className="flex flex-col h-full">
                                <a href="/login" className="text-lg font-semibold text-teal-700 hover:text-teal-800">Fruit & Grain</a>
                                <div className="h-0.5 bg-gray-200 w-full" />

                                <a href="/login" className="mt-1.5 text-sm text-gray-500 hover:text-green-700">Oganic Fruit</a>
                                <a href="/login" className="mt-3 text-sm text-gray-500 hover:text-green-700">Whole Grains</a>
                                <a href="/login" className="mt-3 text-sm text-gray-500 hover:text-green-700">Wheat Products</a>
                                <a href="/login" className="mt-3 text-sm text-gray-500 hover:text-green-700">Special Fruits Set</a>

                            </div>

                            <div className="flex flex-col h-full">
                                <a href="/login" className="text-lg font-semibold text-teal-700 hover:text-teal-800">Smoothie</a>
                                <div className="h-0.5 bg-gray-200 w-full" />

                                <a href="/login" className="-mt-1.5 text-sm text-gray-500 hover:text-green-700"></a>
                                <a href="/login" className="mt-3 text-sm text-gray-500 hover:text-green-700">Acai Mixed</a>
                                <a href="/login" className="mt-3 text-sm text-gray-500 hover:text-green-700">Berry Mixed</a>
                                <a href="/login" className="mt-3 text-sm text-gray-500 hover:text-green-700">Protein Smoothies</a>
                                <a href="/login" className="mt-3 text-sm text-gray-500 hover:text-green-700">Low-Calrorie </a>
                                <a href="/login" className="mt-3 text-sm text-gray-500 hover:text-green-700">Special set</a>

                            </div>

                            <div className="flex flex-col h-full">
                                <a href="/login" className="text-lg font-semibold text-teal-700 hover:text-teal-800">Fruity Ice Cream</a>
                                <div className="h-0.5 bg-gray-200 w-full" />

                                <a href="/login" className="mt-1.5 text-sm text-gray-500 hover:text-green-700">Berry Soft Based</a>
                                <a href="/login" className="mt-3 text-sm text-gray-500 hover:text-green-700">Premium Flavors</a>
                                <a href="/login" className="mt-3 text-sm text-gray-500 hover:text-green-700">Jelato</a>
                                <a href="/login" className="mt-3 text-sm text-gray-500 hover:text-green-700">Special Box</a>

                            </div>

                            <div className="flex flex-col h-full">
                                <a href="/login" className="text-lg font-semibold text-teal-700 hover:text-teal-800">Jelly Fruity</a>
                                <div className="h-0.5 bg-gray-200 w-full" />

                                <a href="/login" className="mt-1.5 text-sm text-gray-500 hover:text-green-700">Fruity Mixed</a>
                                <a href="/login" className="mt-3 text-sm text-gray-500 hover:text-green-700">Layerd Jelly</a>
                                <a href="/login" className="mt-3 text-sm text-gray-500 hover:text-green-700">Milk Based</a>

                            </div>




                        </div>


                    </div>
                </div>



                <Link to="/">
                    <h1 className='flex items-center gap-1.5 cursor-pointer p-1 pl-2 pr-2
                               hover:bg-teal-700 hover:rounded-3xl hover:text-white'>Products</h1>
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