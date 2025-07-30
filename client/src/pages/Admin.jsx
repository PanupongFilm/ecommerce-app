import { useEffect, useState } from "react";

import Dashboard from "../components/admin/Dashboard";
import BannerEdit from "../components/admin/BannerEdit";
import Product from "../components/admin/Product";
import Order from "../components/admin/Order";

import { MdOutlineSpaceDashboard } from "react-icons/md";
import { LuImagePlus } from "react-icons/lu";
import { LuBox } from "react-icons/lu";
import { RiFilePaper2Line } from "react-icons/ri";
import { TbFileInvoice } from "react-icons/tb";
import { GoPerson } from "react-icons/go";
import { IoSettingsOutline } from "react-icons/io5";



const Admin = () => {

  const now = new Date();
  const formatted = now.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  const [activeTab, setActiveTab] = useState('dashboard');

  const data = [
    { name: 'Jan', value: 40 },
    { name: 'Feb', value: 35 },
    { name: 'Mar', value: 50 },
    { name: 'Apr', value: 70 },
    { name: 'May', value: 60 },
    { name: 'Jun', value: 80 },
    { name: 'Jul', value: 30 },
    { name: 'Aug', value: 50 },
    { name: 'Sep', value: 60 },
    { name: 'Oct', value: 40 },
    { name: 'Nov', value: 50 },
    { name: 'Dec', value: 80 },
  ];


  return (
    <div className="flex h-screen">

      <aside className="bg-gray-100 w-63 h-full p-6 flex flex-col border border-gray-200 gap-1 fixed">

        <div className="flex flex-row items-center gap-1.5 ">
          <img src="/Logo2.png" alt="Logo" className="w-10" />
          <h1 className="text-2xl font-semibold text-teal-700 pt-1">D-Fruit</h1>
        </div>

        <h2 className="text-gray-700 font-semibold text-sm pt-7">General</h2>

        <button className={`mt-3 p-1 flex flex-row items-center gap-1.5 cursor-pointer w-full 
        ${activeTab === 'dashboard' ? "text-white bg-teal-700 rounded-full font-semibold" : "text-gray-600 hover:text-gray-700 hover:font-semibold"}`}
          onClick={() => { setActiveTab('dashboard') }}>
          <MdOutlineSpaceDashboard size={30} />
          <h1 className="text-lg">Dashboard</h1>
        </button>

        <button className={`mt-3 p-1 flex flex-row items-center gap-1.5 cursor-pointer w-full 
        ${activeTab === 'bannerEdit' ? "text-white bg-teal-700 rounded-full font-semibold" : "text-gray-600 hover:text-gray-700 hover:font-semibold"}`}
          onClick={() => { setActiveTab('bannerEdit') }}>
          <LuImagePlus size={30} />
          <h1 className="text-lg">Banner Edit</h1>
        </button>


        <button className={`mt-3 p-1 flex flex-row items-center gap-1.5 cursor-pointer w-full 
        ${activeTab === 'product' ? "text-white bg-teal-700 rounded-full font-semibold" : "text-gray-600 hover:text-gray-700 hover:font-semibold"}`}
          onClick={() => { setActiveTab('product') }}>
          <LuBox size={30} />
          <h1 className="text-lg">Product</h1>
        </button>

        <button className={`mt-3 p-1 flex flex-row items-center gap-1.5 cursor-pointer w-full 
        ${activeTab === 'order' ? "text-white bg-teal-700 rounded-full font-semibold" : "text-gray-600 hover:text-gray-700 hover:font-semibold"}`}
          onClick={() => { setActiveTab('order') }}>
          <RiFilePaper2Line size={30} />
          <h1 className="text-lg">Order</h1>
        </button>

        <button className={`mt-3 p-1 flex flex-row items-center gap-1.5 cursor-pointer w-full 
        ${activeTab === 'invoice' ? "text-white bg-teal-700 rounded-full font-semibold" : "text-gray-600 hover:text-gray-700 hover:font-semibold"}`}
          onClick={() => { setActiveTab('invoice') }}>
          <TbFileInvoice size={30} />
          <h1 className="text-lg">Invoices</h1>
        </button>

        <button className={`mt-3 p-1 flex flex-row items-center gap-1.5 cursor-pointer w-full 
        ${activeTab === 'user' ? "text-white bg-teal-700 rounded-full font-semibold" : "text-gray-600 hover:text-gray-700 hover:font-semibold"}`}
          onClick={() => { setActiveTab('user') }}>
          <GoPerson size={30} />
          <h1 className="text-lg">Customer</h1>
        </button>

        <button className={`mt-3 p-1 flex flex-row items-center gap-1.5 cursor-pointer w-full 
        ${activeTab === 'setting' ? "text-white bg-teal-700 rounded-full font-semibold" : "text-gray-600 hover:text-gray-700 hover:font-semibold"}`}
          onClick={() => { setActiveTab('setting') }}>
          <IoSettingsOutline size={30} />
          <h1 className="text-lg">Setting</h1>
        </button>

      </aside>
      
      
      {activeTab === 'dashboard' && <Dashboard formatted={formatted} data={data}/>}
      {activeTab === 'bannerEdit' && <BannerEdit formatted={formatted}/>}
      {activeTab === 'product' && <Product formatted={formatted}/>}
      {activeTab === 'order' && <Order formatted={formatted}/>}

      

    </div>
  )
}

export default Admin
