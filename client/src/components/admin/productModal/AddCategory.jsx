import axios from "axios";
import { useEffect, useState } from "react";

export default function AddCategory({ isOpen, onClose }) {

    const [name, setName] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isError, setIsError] = useState(false);

    useEffect(()=>{

        if(!isOpen){
            setName('');
            setIsError(false);
            setIsSubmitting(false);
        }

    },[isOpen]);
    

    const addSubmit = async() =>{
        try{
            if(name === '') return alert("Name is required!");

            setIsSubmitting(true);

            const data = {
                name: name,
                img: "https://res.cloudinary.com/djjjv7arc/image/upload/v1754031765/Ecommerce_Folder/1754031757797.jpg",
                imgPublicId: "///"
            }

            const response = await axios.post('http://localhost:4001/admin/category/create',data,{withCredentials : true});
            if(response.status === 201){
                alert(response.data.message);
                onClose();
            }

        }catch(error){
            setIsError(true);
            alert(error.response.data.message);
        }
    }

    return (
        <div
            className={`fixed inset-0 z-65 bg-black/50 transition-opacity duration-300 flex justify-center items-center ${isOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`}
            onClick={() => {
                onClose(); setIsSubmitting(false);
            }}
        >
            <div
                className={`bg-white w-120 h-100 flex flex-col items-center rounded-xl shadow-lg transform transition-transform duration-300 ease-in-out ${isOpen ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"}`}
                onClick={(e) => e.stopPropagation()}
            >

                <div className="flex flex-col justify-between p-4 mt-3 items-center gap-9">
                
                    {isError?(<h1 className="text-red-700 text-3xl font-semibold">Something went wrong</h1>):(<h1 className="text-teal-700 text-3xl font-semibold">Add Category</h1>)}
                    {isError?(<p className="text-red-700 text-lg font-semibold">Please try again later.</p>):(<p className="text-gray-700 text-lg font-semibold ">You can add category image at "Banner Edit"</p>)}


                    <div className="flex flex-col gap-1 ">
                        <label className="font-semibold text-lg text-gray-800">Name</label>
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Enter category name"
                            className="py-1 border border-gray-200 p-2 text-xs focus:outline-none w-100 h-10 rounded"
                        />
                    </div>

                    <button className="bg-teal-700 w-100 h-15 rounded cursor-pointer hover:bg-teal-800"
                        onClick={() => { addSubmit(); }}
                        disabled={isSubmitting}>

                        {isSubmitting ? (<p className="text-white text-lg font-semibold">Loading...</p>) :
                            (<p className="text-white text-lg font-semibold">Add</p>)}
                    </button>



                </div>

            </div>

        </div>
    );
}
