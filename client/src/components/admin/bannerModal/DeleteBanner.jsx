import axios from "axios";
import { useState } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";


export default function DeleteBannerModal({ isOpen, onClose, data, bannerCount }) {


  const [isAlert, setIsAlert] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);


  const deleteSubmit = async() =>{
    try{

      if(bannerCount <= 1){
        setIsAlert(true);
        return;
      }

      const bannerInfo = {...data};
      setIsSubmitting(true);

      const responseDelteImgFromCloud = await axios.delete('http://localhost:4001/admin/file/delete',{ params: { public_id: data.imgPublicId }, withCredentials: true });
      if(responseDelteImgFromCloud.status === 200){

        const responseDelteBanner = await axios.delete('http://localhost:4001/admin/banner/delete',{ params: bannerInfo, withCredentials: true});
        if(responseDelteBanner.status === 200){
          alert(responseDelteBanner.data.message);
          setIsSubmitting(false);
          onClose();
        }
      }
    }catch(error){
      alert(error.message);
    }
  }


  return (
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

        <div className="p-3 bg-teal-700 rounded-full w-25 h-25 flex justify-center items-center mt-10 mb-2">
          <RiDeleteBin6Line size={100} className="text-white" />
        </div>

        {isAlert ? (
          <h1 className="text-2xl w-110 text-center mt-4 text-red-700 font-semibold min-h-[80px]">You can only delete this banner if there is more than one banner.</h1>
        ) :
          (
            <h1 className="text-2xl w-100 text-center mt-4 text-teal-800 font-semibold min-h-[80px]">Are you sure to delete this banner?</h1>
          )}


        <button className="mt-5 rounded-xl p-7 bg-red-700 text-white text-xl font-bold w-95 flex justify-center cursor-pointer hover:bg-red-800"
          onClick={() => {deleteSubmit();}}
          disabled={isSubmitting}>

          {isSubmitting ? (<p className="text-white text-lg font-semibold">Loading...</p>) :
            (<p className="text-white text-lg font-semibold">Delete</p>)}
        </button>


      </div>

    </div>
  );
}
