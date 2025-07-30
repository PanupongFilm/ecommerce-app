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
import axios from 'axios';




function Home() {

  const [isCartModalOpen, setIsCartModalOpen] = useState(false);
  const [isHoverProduct, setIsHoverProduct] = useState(false);

  const [mainHome1, setMainHome1] = useState([]);
  const [mainHome2, setMainHome2] = useState([]);
  const [mainHome3, setMainHome3] = useState([]);
  const [subHome1, setSubHome1] = useState({});
  const [subHome2, setSubHome2] = useState({});
  const [subHome3, setSubHome3] = useState({});
  const [subHome4, setSubHome4] = useState({});
  const [subHome5, setSubHome5] = useState({});


  useEffect(() => {

    const getAllBanner = async () => {
      try {
        const allBanner = await axios.get('http://localhost:4001/admin/banner/get');

        setMainHome1(allBanner.data.banner.filter(banner => banner.position === 'mainHome1'));
        setMainHome2(allBanner.data.banner.filter(banner => banner.position === 'mainHome2'));
        setMainHome3(allBanner.data.banner.filter(banner => banner.position === 'mainHome3'));

        setSubHome1(allBanner.data.banner.find(banner => banner.position === 'subHome1'));
        setSubHome2(allBanner.data.banner.find(banner => banner.position === 'subHome2'));
        setSubHome3(allBanner.data.banner.find(banner => banner.position === 'subHome3'));
        setSubHome4(allBanner.data.banner.find(banner => banner.position === 'subHome4'));
        setSubHome5(allBanner.data.banner.find(banner => banner.position === 'subHome5'));


      } catch (error) {
        console.log(error);
      }
    }

    getAllBanner();

  }, []);


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
          <div className='flex flex-row justify-start px-18 py-30 gap-x-7'>

            <Swiper
              modules={[Autoplay, Pagination]}
              autoplay={{ delay: 3000 }}
              loop={true}
              pagination={{ clickable: true }}
              className='w-190 h-107'>


              {mainHome1.map((banner, index) => (

                <SwiperSlide key={index}>
                  <div className='flex flex-col gap-y-4 justify-center px-8 py-50 h-full '
                    style={{
                      backgroundImage: `url(${banner.img})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      backgroundRepeat: 'no-repeat',
                    }}>

                    <p className='text-xl' style={{ color: banner.tagColor }}>{banner.tag}</p>
                    <h1 className='text-5xl font-bold' style={{ color: banner.titleColor }}>{banner.title}</h1>
                    <p className='text-sm w-75 font-semibold' style={{ color: banner.subTitleColor }}>{banner.subTitle}</p>

                    <button className='flex justify-center items-center w-25 py-2 text-sm font-semibold text-white bg-[var(--btn-bg)] hover:bg-[var(--btn-hover)]
                  'style={{
                        "--btn-bg": banner.buttonColor,
                        "--btn-hover": banner.buttonHoverColor
                      }}>
                      Shop now &gt;&gt;
                    </button>
                  </div>
                </SwiperSlide>
              ))};

            </Swiper>



            <div className='flex flex-col gap-7'>

              <div className='w-95 h-50 bg-red-300 flex flex-col justify-center px-5 gap-y-2'
                style={{
                  backgroundImage: `url(${subHome1.img})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat',
                }}>

                <h1 className='text-2xl font-bold' style={{ color: subHome1.titleColor }}>{subHome1.title}</h1>
                <p className='text-xs w-45 font-semibold' style={{ color: subHome1.subTitleColor }}>{subHome1.subTitle}</p>

                <button className='flex justify-center items-center w-22 py-2 text-xs font-semibold text-white bg-[var(--btn-bg)] hover:bg-[var(--btn-hover)]'
                  style={{
                    "--btn-bg": subHome1.buttonColor,
                    "--btn-hover": subHome1.buttonHoverColor
                  }}>
                  Shop now &gt;&gt;
                </button>

              </div>

              <div className='w-95 h-50 bg-red-300 flex flex-col justify-center px-5 gap-y-2'
                style={{
                  backgroundImage: `url(${subHome2.img})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat',
                }}>

                <h1 className='text-2xl font-bold' style={{ color: subHome2.titleColor }}>{subHome2.title}</h1>
                <p className='text-xs w-45 font-semibold' style={{ color: subHome2.subTitleColor }}>{subHome2.subTitle}</p>

                <button className='flex justify-center items-center w-22 py-2 text-xs font-semibold text-white bg-[var(--btn-bg)] hover:bg-[var(--btn-hover)]'
                  style={{
                    "--btn-bg": subHome2.buttonColor,
                    "--btn-hover": subHome2.buttonHoverColor
                  }}>
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
              loop={mainHome2 > 1}
              pagination={{ clickable: true }}
              className="w-full h-100"
            >

              {mainHome2.map((banner, index) => (
                <SwiperSlide key={index}>
                  <div className='w-full h-100 flex items-center justify-end px-20'
                    style={{
                      backgroundImage: `url(${banner.img})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      backgroundRepeat: 'no-repeat',
                    }}>

                    <div className='flex flex-col gap-y-5 text-right'>

                      <p className='text-xl font-semibold ' style={{ color: banner.tagColor }}>{banner.tag}</p>
                      <h1 className='text-5xl font-bold -mt-1' style={{ color: banner.titleColor }}>{banner.title}</h1>
                      <p className='text-sm w-75 font-semibold' style={{ color: banner.subTitleColor }}>{banner.subTitle}</p>

                      <button className=' self-end flex justify-center fitems-center w-25 py-2 text-sm font-semibold text-white bg-[var(--btn-bg)] hover:bg-[var(--btn-hover)]'
                        style={{
                          "--btn-bg": banner.buttonColor,
                          "--btn-hover": banner.buttonHoverColor
                        }}>
                        Shop now &gt;&gt;
                      </button>


                    </div>
                  </div>
                </SwiperSlide>
              ))};
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
              loop={mainHome3.length > 1}
              pagination={{ clickable: true }}
              className="w-full h-100"
            >

              {mainHome3.map((banner, index) => (
                <SwiperSlide key={index}>
                  <div className='w-full h-100 flex items-center justify-start px-20'
                    style={{
                      backgroundImage: `url(${banner.img})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      backgroundRepeat: 'no-repeat',
                    }}>

                    <div className='flex flex-col gap-y-5 text-left'>

                      <h1 className='text-4xl font-bold -mt-1' style={{ color: banner.titleColor }}>{banner.title}</h1>
                      <p className='text-sm w-70 font-semibold' style={{ color: banner.subTitleColor }}>{banner.subTitle}</p>

                      <button className=' flex justify-center fitems-center w-25 py-2 text-sm font-semibold text-white bg-[var(--btn-bg)] hover:bg-[var(--btn-hover)]'
                        style={{
                          "--btn-bg": banner.buttonColor,
                          "--btn-hover": banner.buttonHoverColor
                        }}>
                        Shop now &gt;&gt;
                      </button>

                    </div>
                  </div>
                </SwiperSlide>
              ))}

            </Swiper>
          </div>

          <div className='flex flex-row px-18 justify-around  pb-30 -mt-15'>

            <div style={{
              backgroundImage: `url(${subHome3.img})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              boxShadow: '5px 10px 10px rgba(0,0,0,0.2)'
            }} className='w-80 h-100 cursor-pointer flex flex-col items-center gap-1
            transition-transform duration-300 ease-in-out hover:scale-105'>

              <h1 className='text-3xl pt-5 font-semibold' style={{ color: subHome3.titleColor }}>{subHome3.title}</h1>
              <h2 className='text-xl font-semibold text-white' style={{ color: subHome3.subTitleColor }}>{subHome3.subTitle}</h2>

            </div>

            <div style={{
              backgroundImage: `url(${subHome4.img})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              boxShadow: '5px 10px 10px rgba(0,0,0,0.2)'
            }} className='w-90 h-110 flex flex-col items-center cursor-pointer gap-1
            transition-transform duration-300 ease-in-out hover:scale-105'>

              <h1 className='text-4xl pt-5 font-semibold ' style={{ color: subHome4.titleColor }}>{subHome4.title}</h1>
              <h2 className='text-2xl font-semibold ' style={{ color: subHome4.subTitleColor }}>{subHome4.subTitle}</h2>

            </div>

            <div style={{
              backgroundImage: `url(${subHome5.img})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              boxShadow: '5px 10px 10px rgba(0,0,0,0.2)'
            }} className='w-80 h-100 cursor-pointer flex flex-col items-center gap-1
            transition-transform duration-300 ease-in-out hover:scale-105'>

              <h1 className='text-3xl pt-5 font-semibold ' style={{ color: subHome4.titleColor }}>{subHome4.title}</h1>
              <h2 className='text-xl font-semibold ' style={{ color: subHome4.subTitleColor }}>>{subHome4.subTitle}</h2>

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