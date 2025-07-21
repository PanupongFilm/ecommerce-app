import { FaRegBell } from "react-icons/fa6";
import { TbMoneybag } from "react-icons/tb";
import { BsCartCheck } from "react-icons/bs";
import { GoPerson } from "react-icons/go";
import { MdOutlinePendingActions } from "react-icons/md";

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';

const Dashboard = ({ formatted , data}) => {
  return (
    <main className="bg-white flex flex-col p-4 w-full -mt-1">

        <nav className="p-4 flex flex-row justify-between items-center">
          <h1 className="text-xl font-semibold text-gray-700">Overview</h1>

          <div className="flex flex-row gap-6 items-center">

            <div className="p-2 text-teal-700 hover:text-white hover:bg-teal-700 hover:rounded-full cursor-pointer">
              <FaRegBell size={25} />
            </div>

            <div className="bg-teal-700 rounded-full p-2 flex flex-row">
              <h1 className="text-white font-semibold">{formatted}</h1>
            </div>

          </div>
        </nav>

        <div className="flex flex-row justify-between gap-1.5 p-4  ">
          <div className="flex flex-col gap-5 bg-gray-100 p-5 w-61">

            <div className="flex flex-row justify-between">

              <div className="flex flex-col ">
                <h1 className="text-gray-800 font-semibold text-lg">Total Revenue</h1>
                <p className="text-xs text-gray-500">Last 30 days</p>
              </div>

              <div className="flex bg-teal-200/25 rounded-full p-2 w-10 h-10 items-center justify-center">
                <TbMoneybag size={20} className="text-teal-700" />
              </div>

            </div>

            <div className="flex flex-row justify-between items-center">
              <h1 className="text-teal-800 font-bold text-2xl">$7,000</h1>
              <p className="text-sm text-teal-700 mr-1">+11%</p>
            </div>
          </div>

          <div className="flex flex-col gap-5 bg-gray-100 p-5 w-61">
            <div className="flex flex-row justify-between">

              <div className="flex flex-col ">
                <h1 className="text-gray-800 font-semibold text-lg">Total Order</h1>
                <p className="text-xs text-gray-500">Last 30 days</p>
              </div>

              <div className="flex bg-teal-200/25 rounded-full p-2 w-10 h-10 items-center justify-center">
                <BsCartCheck size={20} className="text-teal-700" />
              </div>

            </div>

            <div className="flex flex-row justify-between items-center">
              <h1 className="text-teal-800 font-bold text-2xl">145</h1>
              <p className="text-sm text-teal-700 mr-1">+11%</p>
            </div>
          </div>

          <div className="flex flex-col gap-5 bg-gray-100 p-5 w-61">
            <div className="flex flex-row justify-between">

              <div className="flex flex-col ">
                <h1 className="text-gray-800 font-semibold text-lg">Total Customer</h1>
                <p className="text-xs text-gray-500">Online 324</p>
              </div>

              <div className="flex bg-teal-200/25 rounded-full p-2 w-10 h-10 items-center justify-center">
                <GoPerson size={20} className="text-teal-700" />
              </div>

            </div>

            <div className="flex flex-row justify-between items-center">
              <h1 className="text-teal-800 font-bold text-2xl">153</h1>
            </div>
          </div>

          <div className="flex flex-col gap-5 bg-gray-100 p-5 w-61">
            <div className="flex flex-row justify-between">

              <div className="flex flex-col ">
                <h1 className="text-gray-800 font-semibold text-lg">Pending Delivery</h1>
                <p className="text-xs text-gray-500">Referrence current date</p>
              </div>

              <div className="flex bg-teal-200/25 rounded-full p-2 w-10 h-10 items-center justify-center">
                <MdOutlinePendingActions size={20} className="text-teal-700" />
              </div>

            </div>

            <div className="flex flex-row justify-between items-center">
              <h1 className="text-teal-800 font-bold text-2xl">34</h1>
            </div>
          </div>



        </div>

        <div className="flex flex-row gap-2.5 p-4 -mt-1">

          <div className="flex flex-col bg-gray-100 w-[70%] h-77 pl-5 pr-5 pt-3 pb-3">

            <div className="flex flex-row justify-between items-center">
              <h1 className="text-xl font-semibold text-gray-800">Sale Analytic </h1>

              <div className="flex flex-row gap-2">

                <button className="bg-teal-700 rounded-3xl text-white w-16 h-8 hover:bg-teal-800 cursor-pointer">
                  <p>All</p>
                </button>

                <button className="bg-teal-700 rounded-3xl text-white w-16 h-8 hover:bg-teal-800 cursor-pointer">
                  <p>1M</p>
                </button>

                <button className="bg-teal-700 rounded-3xl text-white w-16 h-8 hover:bg-teal-800 cursor-pointer">
                  <p>1Y</p>
                </button>

              </div>
            </div>

            <div style={{ width: '100%', height: 300 }} className="mt-5">
              <ResponsiveContainer>
                <LineChart data={data}>
                  <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="value" stroke="#8884d8" strokeWidth={2} />
                </LineChart>
              </ResponsiveContainer>
            </div>

          </div>


          <div className="bg-gray-100 flex flex-col w-[30%] p-3 h-77">

            <h1 className="text-lg font-semibold">Top Selling</h1>

            <Swiper
              direction="vertical"
              spaceBetween={30}
              slidesPerView={3}
              mousewheel={true}
              pagination={{
                clickable: true,
              }}
              className="mt-2"
            >

              <SwiperSlide>
                <div className="flex flex-row items-center gap-3 bg-white w-70 p-3 rounded-xl">
                  <div className="w-16 h-16 flex items-center justify-center overflow-hidden rounded-xl bg-gray-100">
                    <img src="/Pudding.jpg" alt="Logo" className="object-cover w-full h-full" />
                  </div>
                  <div className="flex flex-col">
                    <h1 className="text-lg text-gray-800 font-semibold">Pudding</h1>
                    <p className="text-sm text-gray-500">742 pcs</p>
                  </div>
                </div>

              </SwiperSlide>

              <SwiperSlide>
                <div className="flex flex-row items-center gap-3 bg-white w-70 p-3 rounded-xl">
                  <div className="w-16 h-16 flex items-center justify-center overflow-hidden rounded-xl bg-gray-100">
                    <img src="/Fruit.jpg" alt="Logo" className="object-cover w-full h-full" />
                  </div>
                  <div className="flex flex-col">
                    <h1 className="text-lg text-gray-800 font-semibold">Pudding</h1>
                    <p className="text-sm text-gray-500">319 pcs</p>
                  </div>
                </div>

              </SwiperSlide>

              <SwiperSlide>
                <div className="flex flex-row items-center gap-3 bg-white w-70 p-3 rounded-xl">
                  <div className="w-16 h-16 flex items-center justify-center overflow-hidden rounded-xl bg-gray-100">
                    <img src="/Pudding.jpg" alt="Logo" className="object-cover w-full h-full" />
                  </div>
                  <div className="flex flex-col">
                    <h1 className="text-lg text-gray-800 font-semibold">Pudding</h1>
                    <p className="text-sm text-gray-500">401 pcs</p>
                  </div>
                </div>

              </SwiperSlide>

                            <SwiperSlide>
                <div className="flex flex-row items-center gap-3 bg-white w-70 p-3 rounded-xl">
                  <div className="w-16 h-16 flex items-center justify-center overflow-hidden rounded-xl bg-gray-100">
                    <img src="/Fruit.jpg" alt="Logo" className="object-cover w-full h-full" />
                  </div>
                  <div className="flex flex-col">
                    <h1 className="text-lg text-gray-800 font-semibold">Pudding</h1>
                    <p className="text-sm text-gray-500">319 pcs</p>
                  </div>
                </div>

              </SwiperSlide>


            </Swiper>

          </div>


        </div>


      </main>
  )
}

export default Dashboard