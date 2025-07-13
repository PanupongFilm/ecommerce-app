import { useEffect, useState } from 'react';

import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

import { TbTruckDelivery } from "react-icons/tb";
import { FaRegThumbsUp } from "react-icons/fa6";
import { FaRegCreditCard } from "react-icons/fa6";
import { FaStar } from "react-icons/fa6";



function Home() {

  return (
    <div>

      <div>

        <header>

          <nav>
            <Navbar />
          </nav>

          {/* Honme Banner */}
          <div className='flex flex-row justify-start  px-18 py-30 gap-x-7'>

            <div className='flex flex-col gap-y-4 justify-center w-190 h-107  px-8 py-50'
              style={{
                backgroundImage: "url('/HealthySet.jpg')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
              }}>


              <p className='text-gray-700 text-xl'>Organic & Healthy</p>

              <h1 className='text-teal-700 text-5xl font-bold'>Fruit & Grain</h1>
              <p className='text-sm w-75 font-semibold text-gray-600'>Deliciously blended fruits and whole grains for a healthy, energizing breakfast.</p>

              <button className='flex justify-center items-center bg-teal-700 w-25 py-2 text-sm font-semibold text-white
              hover:bg-teal-800'>
                Shop now &gt;&gt;
              </button>


            </div>

            <div className='flex flex-col gap-7'>

              <div className='w-95 h-50 bg-red-300 flex flex-col justify-center px-5 gap-y-2'
                style={{
                  backgroundImage: "url('/Smoothie.jpg')",
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat',
                }}>

                <h1 className='text-teal-700 text-2xl font-bold'>Smoothie</h1>
                <p className='text-xs w-45 font-semibold text-gray-600'>Packed with vitamins, blended with love.</p>

                <button className='flex justify-center items-center bg-teal-700 w-22 py-2 text-xs font-semibold text-white
              hover:bg-teal-800'>
                  Shop now &gt;&gt;
                </button>

              </div>

              <div className='w-95 h-50 bg-red-300 flex flex-col justify-center px-5 gap-y-2'
                style={{
                  backgroundImage: "url('/Icecream.jpg')",
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat',
                }}>

                <h1 className='text-teal-700 text-2xl font-bold'>Fruity IceCream</h1>
                <p className='text-xs w-45 font-semibold text-gray-600'>Packed with vitamins, blended with love.</p>

                <button className='flex justify-center items-center bg-teal-700 w-22 py-2 text-xs font-semibold text-white
              hover:bg-teal-800'>
                  Shop now &gt;&gt;
                </button>

              </div>

            </div>

          </div>

        </header>

        <main>

          {/* Brand Promote */}
          <div className='flex flex-row bg-yellow-700/50 text-white justify-center gap-7 items-center w-full h-50 -mt-15 '>

            <div className='flex flex-row items-center gap-2'>

              <div className='rounded-full bg-white flex items-center p-2'>
                <FaRegThumbsUp size={60} className='text-teal-700' />
              </div>
              <div className='flex flex-col'>
                <h1 className='text-xl font-semibold'>High Quality</h1>
                <p className='text-sm w-70 '>Carefully selected fruits and 100% natural ingredients in every bite.</p>
              </div>

            </div>

            <div className='flex flex-row items-center gap-2'>

              <div className='rounded-full bg-white flex items-center p-2'>
                <TbTruckDelivery size={60} className='text-teal-700' />
              </div>
              <div className='flex flex-col'>
                <h1 className='text-xl font-semibold'>Fast Delivery</h1>
                <p className='text-sm w-70 '>Freshness delivered fast right to your doorstep.</p>
              </div>

            </div>

            <div className='flex flex-row items-center gap-2'>

              <div className='rounded-full bg-white flex items-center p-2'>
                <FaRegCreditCard size={60} className='text-teal-700' />
              </div>
              <div className='flex flex-col'>
                <h1 className='text-xl font-semibold'>Easy Payment</h1>
                <p className='text-sm w-60 '>Secure, simple, and flexible payment options at your fingertips.</p>
              </div>

            </div>

          </div>


          {/* Best Seller */}
          <div className='px-20 py-15 w-full h-auto '>

            <div className='flex flex-row justify-between'>
              <h1 className='text-teal-700 text-3xl font-semibold '>Best Seller</h1>

              <button className='flex items-center justify-center border border-gray-300 w-20 h-10 hover:border-none hover:bg-teal-700 hover:text-white cursor-pointer'>
                View all
              </button>

            </div>


            <div className='flex flex-row flex-wrap pt-8 gap-9'>

              {/* Product Container */}
              <div className='bg-gray-100 flex flex-col p-4 w-65 h-80 border border-gray-200 cursor-pointer hover:border-gray-300'>

                <div className="relative w-full h-45">
                  <img src="/Fruit.jpg" alt="My Image" className='w-full h-full object-cover' />

                  <div className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
                    SALE
                  </div>
                </div>

                <h1 className='text-base pt-3 text-teal-700 font-semibold'>Strawberry Smoothie</h1>
                <p className='text-xs text-gray-600 w-44 truncate'>Bursting with fresh strawberries and creamy goodness in every sip</p>

                <div className='flex flex-row gap-1'>
                  <FaStar size={15} className='mt-2 text-yellow-500' />
                  <FaStar size={15} className='mt-2 text-yellow-500' />
                  <FaStar size={15} className='mt-2 text-yellow-500' />
                  <FaStar size={15} className='mt-2 text-yellow-500' />
                  <FaStar size={15} className='mt-2 text-gray-300' />
                </div>

                <div className='flex flex-row justify-between mt-1 items-center'>
                  <h1 className='text-lgs font-bold'>$19.00</h1>
                  <p className='text-xs text-gray-500'>Sold: 352 pcs</p>
                </div>


              </div>

              <div className='bg-gray-100 flex flex-col p-4 w-65 h-80 border border-gray-200 cursor-pointer hover:border-gray-300'>

                <div className="relative w-full h-45">
                  <img src="/Fruit.jpg" alt="My Image" className='w-full h-full object-cover' />

                  <div className="absolute top-2 left-2 bg-teal-500 text-white text-xs font-bold px-2 py-1 rounded">
                    New
                  </div>
                </div>

                <h1 className='text-base pt-3 text-teal-700 font-semibold'>Strawberry Smoothie</h1>
                <p className='text-xs text-gray-600 w-44 truncate'>Bursting with fresh strawberries and creamy goodness in every sip</p>

                <div className='flex flex-row gap-1'>
                  <FaStar size={15} className='mt-2 text-yellow-500' />
                  <FaStar size={15} className='mt-2 text-yellow-500' />
                  <FaStar size={15} className='mt-2 text-yellow-500' />
                  <FaStar size={15} className='mt-2 text-yellow-500' />
                  <FaStar size={15} className='mt-2 text-gray-300' />
                </div>

                <div className='flex flex-row justify-between mt-1 items-center'>
                  <h1 className='text-lgs font-bold'>$19.00</h1>
                  <p className='text-xs text-gray-500'>Sold: 483 pcs</p>
                </div>

              </div>

              <div className='bg-gray-100 flex flex-col p-4 w-65 h-80 border border-gray-200 cursor-pointer hover:border-gray-300'>

                <div className="relative w-full h-45">
                  <img src="/Fruit.jpg" alt="My Image" className='w-full h-full object-cover' />

                  <div className="absolute top-2 left-2 bg-white text-red-500 text-xs font-bold px-2 py-1 rounded">
                    Sold out
                  </div>
                </div>

                <h1 className='text-base pt-3 text-teal-700 font-semibold'>Strawberry Smoothie</h1>
                <p className='text-xs text-gray-600 w-44 truncate'>Bursting with fresh strawberries and creamy goodness in every sip</p>

                <div className='flex flex-row gap-1'>
                  <FaStar size={15} className='mt-2 text-yellow-500' />
                  <FaStar size={15} className='mt-2 text-yellow-500' />
                  <FaStar size={15} className='mt-2 text-yellow-500' />
                  <FaStar size={15} className='mt-2 text-yellow-500' />
                  <FaStar size={15} className='mt-2 text-gray-300' />
                </div>

                <div className='flex flex-row justify-between mt-1 items-center'>
                  <h1 className='text-lgs font-bold text-red-500'>Sold out</h1>
                  <p className='text-xs text-gray-500'>Sold: 742 pcs</p>
                </div>

              </div>

              <div className='bg-gray-100 flex flex-col p-4 w-65 h-80 border border-gray-200 cursor-pointer hover:border-gray-300'>

                <div className="relative w-full h-45">
                  <img src="/Fruit.jpg" alt="My Image" className='w-full h-full object-cover' />

                  <div className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
                    SALE
                  </div>
                </div>

                <h1 className='text-base pt-3 text-teal-700 font-semibold'>Strawberry Smoothie</h1>
                <p className='text-xs text-gray-600 w-44 truncate'>Bursting with fresh strawberries and creamy goodness in every sip</p>

                <div className='flex flex-row gap-1'>
                  <FaStar size={15} className='mt-2 text-yellow-500' />
                  <FaStar size={15} className='mt-2 text-yellow-500' />
                  <FaStar size={15} className='mt-2 text-yellow-500' />
                  <FaStar size={15} className='mt-2 text-yellow-500' />
                  <FaStar size={15} className='mt-2 text-gray-300' />
                </div>

                <div className='flex flex-row justify-between mt-1 items-center'>
                  <h1 className='text-lgs font-bold'>$19.00</h1>
                  <p className='text-xs text-gray-500'>Sold: 352 pcs</p>
                </div>


              </div>
            </div>
          </div>

          <div className='flex justify-start px-18 py-1 -mt-3'>

            <div className='w-full h-100 flex items-center justify-end px-20'
              style={{
                backgroundImage: "url('/Jelly.jpg')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
              }}>

              <div className='flex flex-col gap-y-5 text-right'>

                <p className='text-green-700 text-xl font-semibold '>New Arrive</p>
                <h1 className='text-5xl font-bold text-teal-700 -mt-1'>Jelly Fruity</h1>
                <p className='text-sm w-75 font-semibold text-gray-600'>Deliciously blended fruits and whole grains for a healthy, energizing breakfast.</p>

                <button className=' self-end flex justify-center fitems-center bg-teal-700 w-25 py-2 text-sm font-semibold text-white
              hover:bg-teal-800'>
                  Shop now &gt;&gt;
                </button>


              </div>
            </div>
          </div>

          {/* Best Seller */}
          <div className='px-20 py-15 w-full h-auto '>

            <div className='flex flex-row justify-between'>
              <h1 className='text-teal-700 text-3xl font-semibold '>New Arrive</h1>

              <button className='flex items-center justify-center border border-gray-300 w-20 h-10 hover:border-none hover:bg-teal-700 hover:text-white cursor-pointer'>
                View all
              </button>

            </div>


            <div className='flex flex-row flex-wrap pt-8 gap-9'>

              {/* Product Container */}
              <div className='bg-gray-100 flex flex-col p-4 w-65 h-80 border border-gray-200 cursor-pointer hover:border-gray-300'>

                <div className="relative w-full h-45">
                  <img src="/Pudding.jpg" alt="My Image" className='w-full h-full object-cover' />

                  <div className="absolute top-2 left-2 bg-teal-500 text-white text-xs font-bold px-2 py-1 rounded">
                    New
                  </div>
                </div>

                <h1 className='text-base pt-3 text-teal-700 font-semibold'>Strawberry Smoothie</h1>
                <p className='text-xs text-gray-600 w-44 truncate'>Bursting with fresh strawberries and creamy goodness in every sip</p>

                <div className='flex flex-row gap-1'>
                  <FaStar size={15} className='mt-2 text-yellow-500' />
                  <FaStar size={15} className='mt-2 text-yellow-500' />
                  <FaStar size={15} className='mt-2 text-yellow-500' />
                  <FaStar size={15} className='mt-2 text-yellow-500' />
                  <FaStar size={15} className='mt-2 text-gray-300' />
                </div>

                <div className='flex flex-row justify-between mt-1 items-center'>
                  <h1 className='text-lgs font-bold'>$19.00</h1>
                  <p className='text-xs text-gray-500'>Sold: 483 pcs</p>
                </div>

              </div>

                            <div className='bg-gray-100 flex flex-col p-4 w-65 h-80 border border-gray-200 cursor-pointer hover:border-gray-300'>

                <div className="relative w-full h-45">
                  <img src="/Pudding.jpg" alt="My Image" className='w-full h-full object-cover' />

                  <div className="absolute top-2 left-2 bg-teal-500 text-white text-xs font-bold px-2 py-1 rounded">
                    New
                  </div>
                </div>

                <h1 className='text-base pt-3 text-teal-700 font-semibold'>Strawberry Smoothie</h1>
                <p className='text-xs text-gray-600 w-44 truncate'>Bursting with fresh strawberries and creamy goodness in every sip</p>

                <div className='flex flex-row gap-1'>
                  <FaStar size={15} className='mt-2 text-yellow-500' />
                  <FaStar size={15} className='mt-2 text-yellow-500' />
                  <FaStar size={15} className='mt-2 text-yellow-500' />
                  <FaStar size={15} className='mt-2 text-yellow-500' />
                  <FaStar size={15} className='mt-2 text-gray-300' />
                </div>

                <div className='flex flex-row justify-between mt-1 items-center'>
                  <h1 className='text-lgs font-bold'>$19.00</h1>
                  <p className='text-xs text-gray-500'>Sold: 483 pcs</p>
                </div>

              </div>

                            <div className='bg-gray-100 flex flex-col p-4 w-65 h-80 border border-gray-200 cursor-pointer hover:border-gray-300'>

                <div className="relative w-full h-45">
                  <img src="/Pudding.jpg" alt="My Image" className='w-full h-full object-cover' />

                  <div className="absolute top-2 left-2 bg-teal-500 text-white text-xs font-bold px-2 py-1 rounded">
                    New
                  </div>
                </div>

                <h1 className='text-base pt-3 text-teal-700 font-semibold'>Strawberry Smoothie</h1>
                <p className='text-xs text-gray-600 w-44 truncate'>Bursting with fresh strawberries and creamy goodness in every sip</p>

                <div className='flex flex-row gap-1'>
                  <FaStar size={15} className='mt-2 text-yellow-500' />
                  <FaStar size={15} className='mt-2 text-yellow-500' />
                  <FaStar size={15} className='mt-2 text-yellow-500' />
                  <FaStar size={15} className='mt-2 text-yellow-500' />
                  <FaStar size={15} className='mt-2 text-gray-300' />
                </div>

                <div className='flex flex-row justify-between mt-1 items-center'>
                  <h1 className='text-lgs font-bold'>$19.00</h1>
                  <p className='text-xs text-gray-500'>Sold: 483 pcs</p>
                </div>

              </div>

                            <div className='bg-gray-100 flex flex-col p-4 w-65 h-80 border border-gray-200 cursor-pointer hover:border-gray-300'>

                <div className="relative w-full h-45">
                  <img src="/Pudding.jpg" alt="My Image" className='w-full h-full object-cover' />

                  <div className="absolute top-2 left-2 bg-teal-500 text-white text-xs font-bold px-2 py-1 rounded">
                    New
                  </div>
                </div>

                <h1 className='text-base pt-3 text-teal-700 font-semibold'>Strawberry Smoothie</h1>
                <p className='text-xs text-gray-600 w-44 truncate'>Bursting with fresh strawberries and creamy goodness in every sip</p>

                <div className='flex flex-row gap-1'>
                  <FaStar size={15} className='mt-2 text-yellow-500' />
                  <FaStar size={15} className='mt-2 text-yellow-500' />
                  <FaStar size={15} className='mt-2 text-yellow-500' />
                  <FaStar size={15} className='mt-2 text-yellow-500' />
                  <FaStar size={15} className='mt-2 text-gray-300' />
                </div>

                <div className='flex flex-row justify-between mt-1 items-center'>
                  <h1 className='text-lgs font-bold'>$19.00</h1>
                  <p className='text-xs text-gray-500'>Sold: 483 pcs</p>
                </div>

              </div>

              





            </div>
          </div>



        </main>


      </div>

      <footer>
        <Footer />
      </footer>

    </div>
  )
}

export default Home