import { GoPerson } from "react-icons/go";
import { IoMdSearch } from "react-icons/io";
import { IoBagHandleOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className='bg-black/80 backdrop-blur-xs flex flex-row justify-between items-center fixed w-full z-50 p-9 pl-9 pr-10 h-16 px-10'
            style={{ boxShadow: '0px 13px 30px rgba(0,0,0,0.4)' }}>

            <div className='flex gap-6 items-center font-semibold'>
                <div
                    className="w-20 h-18"
                    style={{
                        backgroundImage: "url('/Logo.png')",
                        backgroundSize: 'contain',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                    }}
                >
                </div>

                <Link to="/">
                    <h1 className='text-white flex items-center gap-1.5 cursor-pointer p-1 pl-2 pr-2
                               hover:bg-white hover:rounded-3xl hover:text-black'>Home</h1>
                </Link>

                <Link to="/">
                <h1 className='text-white text-white flex items-center gap-1.5 cursor-pointer p-1 pl-2 pr-2
                               hover:bg-white hover:rounded-3xl hover:text-black'>Products</h1>
                </Link>

                <Link to="/">
                <h1 className='text-white text-white flex items-center gap-1.5 cursor-pointer p-1 pl-2 pr-2
                               hover:bg-white hover:rounded-3xl hover:text-black'>Categories</h1>
                </Link>

            </div>


            <div className='flex gap-6 font-semibold items-center'>

                <div className='text-white flex items-center gap-1.5 cursor-pointer p-1 pl-1 pr-2
                               hover:bg-white hover:rounded-3xl hover:text-black'>
                    <IoMdSearch size={20} />
                    <p>Search</p>
                </div>

                <Link to="/login">
                <div className='text-white flex items-center gap-1.5 cursor-pointer p-1 pl-2 pr-2
                               hover:bg-white hover:rounded-3xl hover:text-black'>
                    <GoPerson />
                    <p>Login</p>
                </div>
                </Link>

                <Link to="/">
                <div className='text-white flex items-center p-1 pr-2 cursor-pointer'>
                    <IoBagHandleOutline size={20} />
                    <p className='text-xs'>0</p>
                </div>
                </Link>


            </div>
        </nav>
    )
}

export default Navbar