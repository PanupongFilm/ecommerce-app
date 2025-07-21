import { FaRegBell } from "react-icons/fa6";

const BannerEdit = ({formatted}) => {
    return (
        <main className="bg-white flex flex-col p-4 w-full -mt-1">

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



        </main>
    )
}

export default BannerEdit