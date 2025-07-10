import { CgMail } from "react-icons/cg";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
                    <div className='bg-black/85 p-11 pl-25 pr-45 pb-20'>
                    <div className='flex flex-row justify-between'>

                        <div className='flex flex-col'>
                            <div
                                className="w-70 h-70 -ml-10"
                                style={{
                                    backgroundImage: "url('/Logo.png')",
                                    backgroundSize: 'contain',
                                    backgroundPosition: 'center',
                                    backgroundRepeat: 'no-repeat',
                                }}
                            >
                            </div>

                            <p className='max-w-sm text-white text-sm ml-2 -mt-5'
                            >DCUBE PIXEL is an online store offering a variety of products with 24/7 service and reliable after-sales support</p>

                        </div>

                        <div className='flex flex-col text-white pt-10 -ml-20 gap-2.5'>
                            <h1 className='text-xl font-bold'>Contact us</h1>

                            <div className='flex flex-row items-center gap-1'>
                                <CgMail size={20} />
                                <p className='text-md font-semibold'>Panupong.Suttikasem@gmail.com</p>
                            </div>

                            <div className='flex flex-row items-center gap-1'>
                                <IoPhonePortraitOutline size={20} />
                                <p className='text-md font-semibold'>+66 96 710 xxxx</p>
                            </div>

                        </div>

                        <div className='flex flex-col text-white pt-10 gap-5'>
                            <h1 className='text-xl font-bold'>Follow us</h1>


                            <div className='flex flex-row gap-3 '>

                                <a href="https://www.facebook.com" target="_blank">
                                <div
                                    className="w-10 h-10"
                                    style={{
                                        backgroundImage: "url('/Facebook.png')",
                                        backgroundSize: 'contain',
                                        backgroundPosition: 'center',
                                        backgroundRepeat: 'no-repeat',
                                    }}
                                >
                                </div>
                                </a>

                                <a href="https://www.discord.com" target="_blank">
                                <div
                                    className="w-11 h-11"
                                    style={{
                                        backgroundImage: "url('/Discord.png')",
                                        backgroundSize: 'contain',
                                        backgroundPosition: 'center',
                                        backgroundRepeat: 'no-repeat',
                                    }}
                                >
                                </div>
                                </a>

                                <a href="https://www.discord.com" target="_blank">
                                <div
                                    className="w-11 h-11"
                                    style={{
                                        backgroundImage: "url('/Line.png')",
                                        backgroundSize: 'contain',
                                        backgroundPosition: 'center',
                                        backgroundRepeat: 'no-repeat',
                                    }}
                                >
                                </div>
                                </a>

                            </div>
                        </div>
                    </div>

                    <div className="w-full h-px mt-20 bg-gray-300 my-4 flex justify-between items-center">
                        <p className='text-white text-sm pt-15'>&copy;2025 DCUBE PIXEL. All rights reserved.</p>
                        
                        <div className='flex flex-row gap-4'>
                            <Link to="/" className="text-white text-sm pt-15 hover:text-blue-400">Terms & Condition</Link>
                            <Link to="/" className="text-white text-sm pt-15 hover:text-blue-400">Policy</Link>
                        </div>
                    </div>

                </div>
  )
}

export default Footer