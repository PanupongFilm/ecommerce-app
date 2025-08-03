import { useState } from "react";
import { BiCategory } from "react-icons/bi";
import { IoPricetagsOutline } from "react-icons/io5";
import { IoFolderOpenOutline } from "react-icons/io5";

import AddCategory from "./AddCategory";
import AddType from "./AddType";
import AddTag from "./AddTag";



export default function CreateChoice({ isOpen, onClose }) {

    const [isAddCategoryModal , setIsAddCategoryModal] = useState(false);
    const [isAddTypeModal , setIsAddTypeModal] = useState(false);
    const [isAddTagModal , setIsAddTagModal] = useState(false);

    return (
        <div>
        <div
            className={`fixed inset-0 z-65 bg-black/50 transition-opacity duration-300 flex justify-center items-center ${isOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`}
            onClick={() => {
                onClose(); setIsAlert(false); setIsSubmitting(false);
            }}
        >
            <div
                className={`bg-white w-120 h-100 flex flex-col items-center rounded-xl shadow-lg transform transition-transform duration-300 ease-in-out ${isOpen ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"}`}
                onClick={(e) => e.stopPropagation()}
            >

                <div className="flex flex-col gap-13 p-11 mt-3">

                    <div className="flex flex-row items-center justify-center gap-1 bg-teal-700 rounded-full shadow-xl p-3 hover:bg-teal-800 cursor-pointer text-white"
                    onClick={()=>{setIsAddCategoryModal(true);}}>
                        <BiCategory size={35} />
                        <h1 className="text-4xl font-semibold">+Category</h1>
                    </div>

                    <div className="flex flex-row items-center justify-center gap-1 bg-teal-700 rounded-full shadow-xl p-3 hover:bg-teal-800 cursor-pointer text-white"
                    onClick={()=>{setIsAddTypeModal(true);}}>
                        <IoFolderOpenOutline size={35} />
                        <h1 className="text-4xl font-semibold">+Product Type</h1>
                    </div>

                    <div className="flex flex-row items-center justify-center gap-1 bg-teal-700 rounded-full shadow-xl p-3 hover:bg-teal-800 cursor-pointer text-white"
                    onClick={()=>{setIsAddTagModal(true);}}>
                        <IoPricetagsOutline size={35} />
                        <h1 className="text-4xl font-semibold">+Special Tag</h1>
                    </div>

                </div>


            </div>

        </div>

            <AddCategory isOpen={isAddCategoryModal} onClose={()=>{setIsAddCategoryModal(false)}}/>
            <AddType isOpen={isAddTypeModal} onClose={()=>{setIsAddTypeModal(false)}}/>
            <AddTag isOpen={isAddTagModal} onClose={()=>{setIsAddTagModal(false)}}/>

        </div>
    );
}
