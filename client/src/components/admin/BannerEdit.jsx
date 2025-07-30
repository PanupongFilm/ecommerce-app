import { useEffect, useState } from "react";
import axios from 'axios';

import { FaRegBell } from "react-icons/fa6";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';

import { MdAddToPhotos } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';

import AddBannerModal from "./bannerModal/AddBannerModal";
import FixBannerModal from "./bannerModal/FixBannerModal";
import DeleteBannerModal from "./bannerModal/DeleteBanner";

const BannerEdit = ({ formatted }) => {

    const [reloadTrigger, setReloadTrigger] = useState(0);

    const [isAddBanner, setIsAddBanner] = useState(false);
    const [isFixBanner, setIsFixBanner] = useState(false);
    const [isDeleteBanner, setIsDeleteBanner] = useState(false);
    const [bannerCount, setBannerCount] = useState(0);

    const [addBannerPosition, setAddBannerPosition] = useState('');

    const [mainHome1, setMainHome1] = useState([]);
    const [mainHome2, setMainHome2] = useState([]);
    const [mainHome3, setMainHome3] = useState([]);
    const [subHome1, setSubHome1] = useState({});
    const [subHome2, setSubHome2] = useState({});
    const [subHome3, setSubHome3] = useState({});
    const [subHome4, setSubHome4] = useState({});
    const [subHome5, setSubHome5] = useState({});

    const [data, setData] = useState({});



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


    }, [reloadTrigger]);


    return (

        <main className="bg-white flex flex-col p-4 w-full -mt-1 ml-63">

            <AddBannerModal
                isOpen={isAddBanner}
                onClose={() => {
                    setIsAddBanner(false);
                    setIsFixBanner(false);
                    setAddBannerPosition("");
                    setReloadTrigger(prev => prev + 1);
                }}
                position={addBannerPosition}
            />

            <FixBannerModal
                isOpen={isFixBanner}
                onClose={() => {
                    setIsFixBanner(false);
                    setAddBannerPosition("");
                    setReloadTrigger(prev => prev + 1);
                }}
                data={data}
            />

            <DeleteBannerModal
                isOpen={isDeleteBanner}
                onClose={() => {
                    setIsDeleteBanner(false);
                    setIsFixBanner(false);
                    setAddBannerPosition("");
                    setBannerCount(0);
                    setReloadTrigger(prev => prev + 1);
                }}
                data={data}
                bannerCount={bannerCount}
            />


            <nav className="p-4 flex flex-row justify-between items-center">
                <h1 className="text-xl font-semibold text-gray-700">Banner Edit</h1>

                <div className="flex flex-row gap-6 items-center">

                    <div className="p-2 text-teal-700 hover:text-white hover:bg-teal-700 hover:rounded-full cursor-pointer">
                        <FaRegBell size={25} />
                    </div>

                    <div className="bg-teal-700 rounded-full p-2 flex flex-row">
                        <h1 className="text-white font-semibold">{formatted}</h1>
                    </div>

                </div>
            </nav>

            <h1 className="text-teal-700 text-2xl font-bold px-4 -mb-2">Home Page Banner &gt;</h1>


            {/* Header Banner */}
            <div className='flex flex-row justify-start  py-5  pr-7 '>

                <Swiper
                    modules={[Autoplay, Pagination]}
                    autoplay={{ delay: 5000 }}
                    loop={true}
                    pagination={{ clickable: true }}
                    className='w-160 h-95'>

                    {mainHome1.map((banner, index) => (

                        <SwiperSlide key={index}>
                            <div className='flex flex-col gap-y-3 justify-center px-8 py-50 h-full -mt-5 relative cursor-pointer'
                                style={{
                                    backgroundImage: `url(${banner.img})`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                    backgroundRepeat: 'no-repeat',
                                }} onClick={() => { setIsFixBanner(true); setAddBannerPosition(false); setData(banner); }}>

                                <p className={`text-lg`} style={{ color: `${banner.tagColor}` }}>{banner.tag}</p>
                                <h1 className={`text-4xl font-bold`} style={{ color: `${banner.titleColor}` }}>{banner.title}</h1>
                                <p className={`text-xs w-65 font-semibold`} style={{ color: `${banner.subTitleColor}` }}>{banner.subTitle}</p>

                                <button className={`flex justify-center items-center w-20 py-2 text-xs font-semibold text-white bg-[var(--btn-bg)] hover:bg-[var(--btn-hover)]
                            `} style={{
                                        "--btn-bg": banner.buttonColor,
                                        "--btn-hover": banner.buttonHoverColor
                                    }}>
                                    Shop now &gt;&gt;
                                </button>


                                <div className="flex flex-col gap-2 absolute left-147 bottom-3">

                                    <button className="text-white bg-teal-700 p-2 rounded w-10 h-10 flex justify-center items-center hover:bg-teal-800"
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            setIsAddBanner(true);
                                            setAddBannerPosition('mainHome1');
                                        }}
                                    >
                                        <MdAddToPhotos size={35} />
                                    </button>

                                    <button className="text-white bg-teal-700 p-2 rounded w-10 h-10 flex justify-center items-center hover:bg-teal-800"
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            setIsDeleteBanner(true);
                                            setData(banner);
                                            setBannerCount(mainHome1.length);
                                        }}
                                    >
                                        <RiDeleteBin6Line size={35} />
                                    </button>
                                </div>

                            </div>

                        </SwiperSlide>

                    ))};


                </Swiper>



                <div className='flex flex-col gap-7'>

                    <div className='w-80 h-44 bg-red-300 flex flex-col justify-center px-5 gap-y-2 cursor-pointer'
                        style={{
                            backgroundImage: `url(${subHome1.img})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            backgroundRepeat: 'no-repeat',
                        }} onClick={() => { setIsFixBanner(true); setIsAddBanner(false); setData(subHome1) }}>

                        <h1 className='text-xl font-bold' style={{ color: subHome1.titleColor }}>{subHome1.title}</h1>
                        <p className='text-xs w-30 font-semibold' style={{ color: subHome1.subTitleColor }}>{subHome1.subTitle}</p>

                        <button className='flex justify-center items-center w-20 py-1.5 text-xs font-semibold text-white bg-[var(--btn-bg)] hover:bg-[var(--btn-hover)]'
                            style={{
                                "--btn-bg": subHome1.buttonColor,
                                "--btn-hover": subHome1.buttonHoverColor,
                            }}>
                            Shop now &gt;&gt;
                        </button>

                    </div>

                    <div className='w-80 h-44 bg-red-300 flex flex-col justify-center px-5 gap-y-2 cursor-pointer'
                        style={{
                            backgroundImage: `url(${subHome2.img})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            backgroundRepeat: 'no-repeat',
                        }} onClick={() => { setIsFixBanner(true); setIsAddBanner(false); setData(subHome2) }}>

                        <h1 className='text-xl font-bold' style={{ color: subHome2.titleColor }}>{subHome2.title}</h1>
                        <p className='text-xs w-30 font-semibold' style={{ color: subHome2.subTitleColor }}>{subHome2.subTitle}</p>

                        <button className='flex justify-center items-center w-20 py-1.5 text-xs font-semibold text-white bg-[var(--btn-bg)] hover:bg-[var(--btn-hover)]'
                            style={{
                                "--btn-bg": subHome2.buttonColor,
                                "--btn-hover": subHome2.buttonHoverColor,
                            }}>
                            Shop now &gt;&gt;
                        </button>

                    </div>

                </div>

            </div>

            {/* Promote Banner */}
            <div className='flex justify-start mt-2'>

                <Swiper
                    modules={[Autoplay, Pagination]}
                    autoplay={{ delay: 3000 }}
                    loop={false}
                    slidesPerView={1}
                    pagination={{ clickable: true }}
                    className="w-246 h-80"
                >

                    {mainHome2.map((banner, index) => (

                        <SwiperSlide key={index}>
                            <div className='w-full h-full flex items-center justify-end px-20 cursor-pointer relative'
                                style={{
                                    backgroundImage: `url(${banner.img})`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                    backgroundRepeat: 'no-repeat',
                                }} onClick={() => { setIsFixBanner(true); setIsAddBanner(false); setData(banner) }}>

                                <div className='flex flex-col gap-y-5 text-right'>

                                    <p className='text-lg font-semibold' style={{ color: banner.tagColor }}>{banner.tag}</p>
                                    <h1 className='text-4xl font-bold -mt-1' style={{ color: banner.titleColor }}>{banner.title}</h1>
                                    <p className='text-xs w-75 font-semibold ' style={{ color: banner.subTitleColor }}>{banner.subTitle}</p>

                                    <button className=' self-end flex justify-center fitems-center w-21 py-2 text-xs font-semibold text-white bg-[var(--btn-bg)] hover:bg-[var(--btn-hover)]'
                                        style={{
                                            "--btn-bg": banner.buttonColor,
                                            "--btn-hover": banner.buttonHoverColor
                                        }}>
                                        Shop now &gt;&gt;
                                    </button>

                                </div>

                                <div className="flex flex-row gap-2 absolute left-220 top-3">

                                    <button className="text-white bg-teal-700 p-2 rounded w-10 h-10 flex justify-center items-center hover:bg-teal-800"
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            setIsAddBanner(true);
                                            setAddBannerPosition('mainHome2');
                                        }}>
                                        <MdAddToPhotos size={35} />
                                    </button>

                                    <button className="text-white bg-teal-700 p-2 rounded w-10 h-10 flex justify-center items-center hover:bg-teal-800"
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            setIsDeleteBanner(true);
                                            setData(banner);
                                            setBannerCount(mainHome2.length);
                                        }}>
                                        <RiDeleteBin6Line size={35} />
                                    </button>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))};

                </Swiper>
            </div>


            {/* Promotion or Sale Banner */}
            <div className='flex flex-row justify-start  py-5 mt-2'>

                <Swiper
                    modules={[Autoplay, Pagination]}
                    autoplay={{ delay: 3000 }}
                    loop={false}
                    slidesPerView={1}
                    pagination={{ clickable: true }}
                    className="w-246 h-80"
                >

                    {mainHome3.map((banner, index) => (

                        <SwiperSlide key={index}>
                            <div className='w-full h-full flex items-center justify-start px-20 cursor-pointer relative'
                                style={{
                                    backgroundImage: `url(${banner.img})`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                    backgroundRepeat: 'no-repeat',
                                }} onClick={() => { setIsFixBanner(true); setIsAddBanner(false); setData(banner) }}>

                                <div className='flex flex-col gap-y-5 text-left'>


                                    <h1 className='text-3xl font-bold -mt-1' style={{ color: banner.titleColor }}>{banner.title}</h1>
                                    <p className='text-xs w-70 font-semibold' style={{ color: banner.subTitleColor }}>{banner.subTitle}</p>

                                    <button className=' flex justify-center fitems-center w-21 py-2 text-xs font-semibold text-white bg-[var(--btn-bg)] hover:bg-[var(--btn-hover)]'
                                        style={{
                                            "--btn-bg": banner.buttonColor,
                                            "--btn-hover": banner.buttonHoverColor
                                        }}>
                                        Shop now &gt;&gt;
                                    </button>

                                </div>

                                <div className="flex flex-row gap-2 absolute left-3 top-3">
                                    <button className="text-white bg-teal-700 p-2 rounded w-10 h-10 flex justify-center items-center hover:bg-teal-800"
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            setIsAddBanner(true);
                                            setAddBannerPosition('mainHome3');
                                        }}>
                                        <MdAddToPhotos size={35} />
                                    </button>

                                    <button className="text-white bg-teal-700 p-2 rounded w-10 h-10 flex justify-center items-center hover:bg-teal-800"
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            setIsDeleteBanner(true);
                                            setData(banner);
                                            setBannerCount(mainHome3.length);
                                        }}>
                                        <RiDeleteBin6Line size={35} />
                                    </button>
                                </div>
                            </div>
                        </SwiperSlide>


                    ))};

                </Swiper>
            </div>



            {/* Sale Product */}
            <div className='flex flex-row  justify-around mt-2'>

                <div style={{
                    backgroundImage: `url(${subHome3.img})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    boxShadow: '5px 10px 10px rgba(0,0,0,0.2)'
                }} className='w-70 h-90 cursor-pointer flex flex-col items-center gap-1 relative
                 transition-transform duration-300 ease-in-out hover:scale-105'
                    onClick={() => { setIsFixBanner(true); setIsAddBanner(false); setData(subHome3) }}>

                    <h1 className='text-2xl pt-5 font-semibold' style={{ color: subHome3.titleColor }}>{subHome3.title}</h1>
                    <h2 className='text-lg font-semibold ' style={{ color: subHome3.subTitleColor }}>{subHome3.subTitle}</h2>

                </div>

                <div style={{
                    backgroundImage: `url(${subHome4.img})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    boxShadow: '5px 10px 10px rgba(0,0,0,0.2)'
                }} className='w-80 h-100 flex flex-col items-center cursor-pointer gap-1
                     transition-transform duration-300 ease-in-out hover:scale-105'
                    onClick={() => { setIsFixBanner(true); setIsAddBanner(false); setData(subHome4) }}>

                    <h1 className='text-3xl pt-5 font-semibold ' style={{ color: subHome4.titleColor }}>{subHome4.title}</h1>
                    <h2 className='text-xl font-semibold' style={{ color: subHome4.subTitleColor }}>{subHome4.subTitle}</h2>

                </div>

                <div style={{
                    backgroundImage: `url(${subHome5.img})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    boxShadow: '5px 10px 10px rgba(0,0,0,0.2)'
                }} className='w-70 h-90 cursor-pointer flex flex-col items-center gap-1
                 transition-transform duration-300 ease-in-out hover:scale-105'
                    onClick={() => { setIsFixBanner(true); setIsAddBanner(false); setData(subHome5) }}>

                    <h1 className='text-2xl pt-5 font-semibold' style={{ color: subHome5.titleColor }}>{subHome5.title}</h1>
                    <h2 className='text-lg font-semibold' style={{ color: subHome5.subTitleColor }}>{subHome5.subTitle}</h2>

                </div>



            </div>

            <h1 className="text-teal-700 text-2xl font-bold px-4  py-15">Product Category Banner &gt;</h1>


        </main>
    )
}

export default BannerEdit