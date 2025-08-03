import axios from "axios";
import { useEffect, useState } from "react";

export default function AddTag({ isOpen, onClose }) {

    const [name, setName] = useState('');
    const [bgColor, setBgColor] = useState('#000000');
    const [textColor, setTextColor] = useState('#FFFFFF');

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isError, setIsError] = useState(false);

    const addSubmit = async () => {
        try {
            if(name === '') return alert('Name is required!');
            setIsSubmitting(true);

            const data ={
                name: name,
                textColor: textColor,
                bgColor : bgColor
            }

            const response = await axios.post('http://localhost:4001/admin/tag/create',data,{withCredentials: true});
            if((await response).status === 201){
                alert(response.data.message);
                onClose();
            }

        } catch (error) {
            setIsError(true);
            alert(error.response.data.message);
        }
    }

    useEffect(() => {
        if (!isOpen) {
            setIsError(false);
            setIsSubmitting(false);
            setBgColor('#000000');
            setTextColor('#FFFFFF');
            setName('');
        }
    }, [isOpen]);

    return (
        <div
            className={`fixed inset-0 z-65 bg-black/50 transition-opacity duration-300 flex justify-center items-center ${isOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`}
            onClick={() => {
                onClose();
            }}
        >
            <div
                className={`bg-white w-120 h-120 flex flex-col items-center rounded-xl shadow-lg transform transition-transform duration-300 ease-in-out ${isOpen ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"}`}
                onClick={(e) => e.stopPropagation()}
            >

                <div className="flex flex-col justify-between p-4 mt-3 items-center gap-9">

                    {isError ? (<h1 className="text-red-700 text-3xl font-semibold">Something went wrong</h1>) : (<h1 className="text-teal-700 text-3xl font-semibold">Add Tag</h1>)}

                    <div className="-mt-6 w-full h-30 bg-gray-100 p-5 flex justify-center items-center">

                        <div className="rounded text-xs font-bold w-24 h-11 flex justify-center items-center" style={{ backgroundColor: bgColor, color: textColor }}>
                            <h1>{name || 'Preview'}</h1>
                        </div>

                    </div>


                    <div className="flex flex-col gap-1 -mt-10">
                        <label className="font-semibold text-lg text-gray-800">Name</label>
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Enter category name"
                            className="py-1 border border-gray-200 p-2 text-xs focus:outline-none w-100 h-10"
                        />
                    </div>

                    <div className="flex flex-col gap-1 w-full -mt-5">
                        <label className="font-semibold text-sm">Background Color</label>
                        <input
                            type="color"
                            value={bgColor}
                            onChange={(e) => setBgColor(e.target.value)}
                        />
                    </div>

                    <div className="flex flex-col gap-1 w-full -mt-8">
                        <label className="font-semibold text-sm">Text Color</label>
                        <input
                            type="color"
                            value={textColor}
                            onChange={(e) => setTextColor(e.target.value)}
                        />
                    </div>


                    <button className="bg-teal-700 w-100 h-15 rounded cursor-pointer hover:bg-teal-800 -mt-6"
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
