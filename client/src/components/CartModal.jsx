import { RxCross2 } from "react-icons/rx";

export default function CartModal({ isOpen, onClose, children }) {
  return (
    <div
      className={`fixed inset-0 z-50 bg-black/50 transition-opacity duration-300 ${
        isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
      onClick={onClose}
    >
      <div
        className={`bg-white w-90 h-full ml-auto flex flex-col transform transition-transform duration-300 ease-in-out  ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex flex-col p-6">

          <div className="flex flex-row justify-between items-center text-gray-700">
            <h1 className="text-xl font-semibold">My Cart</h1>
            <button onClick={onClose} className="cursor-pointer">
              <RxCross2 size={25} />
            </button>
          </div>

          <div className="bg-gray-300 h-0.5 mt-3" />
            
          <div className="">
            
          </div>

        </div>
      </div>
    </div>
  );
}
