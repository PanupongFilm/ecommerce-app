import { IoIosAdd } from "react-icons/io";
import { TbCategoryPlus } from "react-icons/tb";


import CreateChoice from "./productModal/CreateChoice";
import AddProductModal from "./productModal/AddProduct";

import { useState } from "react";

const Product = () => {

    const [reloadTrigger, setReloadTrigger] = useState(0);
    const [isCreateChoiceModal, setIsCreateChoiceModal] = useState(false);
    const [isAddProductModal, setIsAddProductModal] = useState(false);

    return (
        <main className="bg-white flex flex-col p-4 w-full -mt-1 ml-63">

            <nav className="p-4 flex flex-row justify-between items-center">
                <h1 className="text-xl font-semibold text-gray-700">Product Management</h1>

                <div className="flex flex-row gap-6 items-center">
                    
                    <TbCategoryPlus size={45} className="text-teal-700 p-2 cursor-pointer
                    hover:bg-teal-700 hover:rounded-full hover:text-white" 
                    onClick={()=>{setIsCreateChoiceModal(true)}}/>

                    <div className="bg-teal-700 hover:bg-teal-800 rounded-full p-2 flex flex-row gap-1 justify-center items-center cursor-pointer"
                    onClick={()=>{setIsAddProductModal(true)}}>
                        <IoIosAdd size={25} className="text-white"/>
                        <h1 className="text-white font-semibold text-sm pr-2">Product</h1>
                    </div>
                    
                </div>
            </nav>

            <CreateChoice isOpen={isCreateChoiceModal} onClose={()=>{setIsCreateChoiceModal(false)}}/>
            <AddProductModal isOpen={isAddProductModal} onClose={()=>{setIsAddProductModal(false)}}/>




        </main>

    )
}

export default Product