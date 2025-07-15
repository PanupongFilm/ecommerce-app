import { useEffect, useState } from 'react';


import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';

import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

import { BsTruck } from "react-icons/bs";
import { BsCheckCircle } from "react-icons/bs";
import { FaSeedling } from "react-icons/fa";
import { FaRegCreditCard } from "react-icons/fa6";
import { FaStar } from "react-icons/fa6";

import CartModal from '../components/CartModal';
import ProductCard from '../components/ProductCard';




function Home() {

  const [isCartModalOpen, setIsCartModalOpen] = useState(false);
  const [isHoverProduct, setIsHoverProduct] = useState(false);

  return (
    <div>

      <div>

        <header>

          <nav>
            <Navbar openCart={() => setIsCartModalOpen(true)} />

            <CartModal
              isOpen={isCartModalOpen}
              onClose={() => setIsCartModalOpen(false)}
            >

            </CartModal>
          </nav>

          {/* Honme Banner */}
          <div className='flex flex-row justify-start  px-18 py-30 gap-x-7'>

            <Swiper
              modules={[Autoplay, Pagination]}
              autoplay={{ delay: 3000 }}
              loop={true}
              pagination={{ clickable: true }}
              className='w-190 h-107'>

              <SwiperSlide>
                <div className='flex flex-col gap-y-4 justify-center px-8 py-50 h-full'
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
              </SwiperSlide>

              <SwiperSlide>
                <div className='flex flex-col gap-y-4 justify-center px-8 py-50 h-full'
                  style={{
                    backgroundImage: "url('/HealthySet2.jpg')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                  }}>

                  <p className='text-gray-700 text-xl'>Fresh & Healthy</p>
                  <h1 className='text-teal-700 text-5xl font-bold'>Acai mixed</h1>
                  <p className='text-sm w-75 font-semibold text-gray-600'>Healthy Meets Delicious.</p>

                  <button className='flex justify-center items-center bg-teal-700 w-25 py-2 text-sm font-semibold text-white
              hover:bg-teal-800'>
                    Shop now &gt;&gt;
                  </button>
                </div>
              </SwiperSlide>


            </Swiper>



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

          {/* Key Selling Points */}
          <div className='flex flex-row gap-7 justify-around px-18 -mt-9'>

            <div className='flex flex-col justify-center items-center gap-2 border border-gray-300 p-5 w-70 h-50 rounded-md'>

              <BsTruck size={60} className='text-yellow-700/90' />
              <h1 className='text-xl font-semibold text-yellow-700'>Fast Delivery</h1>
              <p className='w-50 text-center text-sm text-yellow-900'>Freshness delivered fast right to your doorstep</p>

            </div>

            <div className='flex flex-col justify-center items-center gap-2 border border-gray-300 p-5 w-70 h-50 rounded-md'>

              <FaSeedling size={60} className='text-yellow-700/90' />
              <h1 className='text-xl font-semibold text-yellow-700'>24X7 Support</h1>
              <p className='w-50 text-center text-sm text-yellow-900'>We're always just a message away — day or night.</p>

            </div>

            <div className='flex flex-col justify-center items-center gap-2 border border-gray-300 p-5 w-70 h-50 rounded-md'>

              <BsCheckCircle size={60} className='text-yellow-700/90' />
              <h1 className='text-xl font-semibold text-yellow-700'>High Quality</h1>
              <p className='w-50 text-center text-sm text-yellow-900'>Premium-grade fruits trusted by thousands.</p>

            </div>

            <div className='flex flex-col justify-center items-center gap-2 border border-gray-300 p-5 w-70 h-50 rounded-md'>

              <FaRegCreditCard size={60} className='text-yellow-700/90' />
              <h1 className='text-xl font-semibold text-yellow-700'>Easy Payment</h1>
              <p className='w-50 text-center text-sm text-yellow-900'>Secure, simple, and flexible payment options at your fingertips.</p>

            </div>


          </div>


          {/* Best Seller */}
          <div className='px-20 py-15 w-full h-auto '>

            <div className='flex flex-row justify-between items-center'>
              <div className='flex flex-col'>
                <h1 className='text-teal-700 text-3xl font-semibold '>Best Seller</h1>
                <div className='w-30 h-0.5 bg-yellow-700/60'></div>
              </div>

              <button className='flex items-center justify-center border border-gray-300 w-20 h-10 hover:border-none hover:bg-teal-700 hover:text-white cursor-pointer'>
                View all
              </button>

            </div>


            {/* Best Seller Product line */}
            <div className='pt-8'>

              <Swiper
                modules={[]}
                loop={true}
                slidesPerView={4}
                spaceBetween={-51}
                className='w-full h-107'
              >

                <SwiperSlide>
                  <ProductCard product={{
                    img: "/Fruit.jpg",
                    tag: "Sale",
                    name: "Strawberry Smoothie",
                    description: "Bursting with fresh strawberries and creamy goodness in every sip",
                    rating: 5,
                    price: 10
                  }} />
                </SwiperSlide>

                <SwiperSlide>
                  <ProductCard product={{
                    img: "/Fruit.jpg",
                    tag: "New",
                    name: "Strawberry Smoothie",
                    description: "Bursting with fresh strawberries and creamy goodness in every sip",
                    rating: 5,
                    price: 10
                  }} />
                </SwiperSlide>

                <SwiperSlide>
                  <ProductCard product={{
                    img: "/Fruit.jpg",
                    tag: "Sold out",
                    name: "Strawberry Smoothie",
                    description: "Bursting with fresh strawberries and creamy goodness in every sip",
                    rating: 5,
                    price: 10
                  }} />
                </SwiperSlide>

                <SwiperSlide>
                  <ProductCard product={{
                    img: "/Fruit.jpg",
                    tag: "Sale",
                    name: "Strawberry Smoothie",
                    description: "Bursting with fresh strawberries and creamy goodness in every sip",
                    rating: 5,
                    price: 10
                  }} />
                </SwiperSlide>

                <SwiperSlide>
                  <ProductCard product={{
                    img: "/Fruit.jpg",
                    tag: "New",
                    name: "Strawberry Smoothie",
                    description: "Bursting with fresh strawberries and creamy goodness in every sip",
                    rating: 5,
                    price: 10
                  }} />
                </SwiperSlide>
                  



              </Swiper>
            </div>
          </div>




          {/* Promote Banner */}
          <div className='flex justify-start px-18 py-1 -mt-20'>

            <Swiper
              modules={[Autoplay, Pagination]}
              autoplay={{ delay: 3000 }}
              loop={false}
              slidesPerView={1}
              pagination={{ clickable: true }}
              className="w-full h-100"
            >

              <SwiperSlide>
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
              </SwiperSlide>


            </Swiper>
          </div>


          {/* New Arrive */}
          <div className='px-20 py-15 w-full h-auto -mt-1'>

            <div className='flex flex-row justify-between items-center'>
              <div className='flex flex-col'>
                <h1 className='text-teal-700 text-3xl font-semibold '>New Arrive</h1>
                <div className='w-30 h-0.5 bg-yellow-700/60'></div>
              </div>

              <button className='flex items-center justify-center border border-gray-300 w-20 h-10 hover:border-none hover:bg-teal-700 hover:text-white cursor-pointer'>
                View all
              </button>

            </div>


            {/* New Arrive Product line */}
            <div className='pt-8'>

              <Swiper
                modules={[]}
                loop={true}
                slidesPerView={4}
                spaceBetween={-51}
                className='w-full h-107'
              >

                <SwiperSlide>
                  <ProductCard product={{
                    img: "/Pudding.jpg",
                    tag: "NEW",
                    name: "Strawberry Smoothie",
                    description: "Bursting with fresh strawberries and creamy goodness in every sip",
                    rating: 5,
                    price: 19
                  }} />
                </SwiperSlide>

                <SwiperSlide>
                  <ProductCard product={{
                    img: "/Pudding.jpg",
                    tag: "NEW",
                    name: "Strawberry Smoothie",
                    description: "Bursting with fresh strawberries and creamy goodness in every sip",
                    rating: 5,
                    price: 19
                  }} />
                </SwiperSlide>

                <SwiperSlide>
                  <ProductCard product={{
                    img: "/Pudding.jpg",
                    tag: "NEW",
                    name: "Strawberry Smoothie",
                    description: "Bursting with fresh strawberries and creamy goodness in every sip",
                    rating: 5,
                    price: 19
                  }} />
                </SwiperSlide>

                <SwiperSlide>
                  <ProductCard product={{
                    img: "/Pudding.jpg",
                    tag: "NEW",
                    name: "Strawberry Smoothie",
                    description: "Bursting with fresh strawberries and creamy goodness in every sip",
                    rating: 5,
                    price: 19
                  }} />
                </SwiperSlide>

                <SwiperSlide>
                  <ProductCard product={{
                    img: "/Pudding.jpg",
                    tag: "NEW",
                    name: "Strawberry Smoothie",
                    description: "Bursting with fresh strawberries and creamy goodness in every sip",
                    rating: 5,
                    price: 19
                  }} />
                </SwiperSlide>

              </Swiper>
            </div>
          </div>

          {/* Promotion or Sale */}

          <div className='flex justify-start px-18 py-1 -mt-15 pb-25'>

            <Swiper
              modules={[Autoplay, Pagination]}
              autoplay={{ delay: 3000 }}
              loop={false}
              slidesPerView={1}
              pagination={{ clickable: true }}
              className="w-full h-100"
            >

              <SwiperSlide>
                <div className='w-full h-100 flex items-center justify-start px-20'
                  style={{
                    backgroundImage: "url('/SpecialDeal.jpg')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                  }}>

                  <div className='flex flex-col gap-y-5 text-left'>


                    <h1 className='text-4xl font-bold text-teal-700 -mt-1'>Special Deal — Up to 30% Off</h1>
                    <p className='text-sm w-70 font-semibold text-gray-600'>Juicy deals dropping now — grab yours before they are gone!</p>

                    <button className=' flex justify-center fitems-center bg-teal-700 w-25 py-2 text-sm font-semibold text-white
                                      hover:bg-teal-800'>
                      Shop now &gt;&gt;
                    </button>


                  </div>
                </div>
              </SwiperSlide>


            </Swiper>
          </div>

          <div className='flex flex-row px-18 justify-around  pb-30 -mt-15'>


            <div style={{
              backgroundImage: "url('/sale1.jpg')",
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              boxShadow: '5px 10px 10px rgba(0,0,0,0.2)'
            }} className='w-80 h-100 cursor-pointer flex flex-col items-center gap-1
            transition-transform duration-300 ease-in-out hover:scale-105'>

              <h1 className='text-3xl pt-5 font-semibold text-white'>15% off</h1>
              <h2 className='text-xl font-semibold text-white'>Bueberry Yogurt</h2>

            </div>

            <div style={{
              backgroundImage: "url('/sale2.jpg')",
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              boxShadow: '5px 10px 10px rgba(0,0,0,0.2)'
            }} className='w-90 h-110 flex flex-col items-center cursor-pointer gap-1
            transition-transform duration-300 ease-in-out hover:scale-105'>

              <h1 className='text-4xl pt-5 font-semibold text-white'>30% off</h1>
              <h2 className='text-2xl font-semibold text-white'>Strawberry Yogurt</h2>

            </div>

            <div style={{
              backgroundImage: "url('/sale3.jpg')",
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              boxShadow: '5px 10px 10px rgba(0,0,0,0.2)'
            }} className='w-80 h-100 cursor-pointer flex flex-col items-center gap-1
            transition-transform duration-300 ease-in-out hover:scale-105'>

              <h1 className='text-3xl pt-5 font-semibold text-white'>15% off</h1>
              <h2 className='text-xl font-semibold text-white'>Pomegranate Mixed Grain</h2>

            </div>



          </div>


        </main>


      </div >

      <footer>
        <Footer />
      </footer>

    </div >
  )
}

export default Home