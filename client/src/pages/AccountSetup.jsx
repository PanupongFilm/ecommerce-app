import axios from 'axios';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';


const AccountSetup = () => {
    const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm();
    const [showPassword, setShowPassword] = useState(false);
    const [userInvalid, setUserInvalid] = useState(false);
    const navigate = useNavigate();

    const [errorMessage, setErrorMessage] = useState('');


    const onSubmit = async (data) => {
        try {
            const response = await axios.patch('http://localhost:4001/user/account-setup', data, { withCredentials: true });
            if (response.status === 200) {
                console.log(response.data.message);
                navigate('/');
            }
        } catch (error) {
            setErrorMessage(error.response.data.message);
            setUserInvalid(true);
        }
    };

    return (

        <div>
            <div
                className="min-h-screen flex flex-col"
                style={{
                    backgroundImage: "url('/Login-background.png')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                }}
            >
                <header>
                    <nav>
                        <Navbar />
                    </nav>
                </header>

                <main className="flex-grow flex items-center justify-center pt-4">
                    <div className="p-9 pt-5 mt-7 rounded-xl shadow-2xl bg-black/50 backdrop-blur-sm w-full max-w-105 max-h-92">
                        <h1 className="text-2xl font-bold mb-2 text-center text-white text-">Complete your account setup</h1>
                        <h2 className="text-sm font-bold mb-4 text-center text-white ">Set username and password for later logins</h2>

                        <form onSubmit={handleSubmit(onSubmit)}>

                            {/* Username */}
                            <div className="mb-7 relative text-sm">
                                <label className="block mb-2 ml-3 font-semibold text-white">User name</label>
                                <input
                                    type='text'
                                    {...register('userName', { required: "Please enter your username" })}

                                    className={`w-full border rounded-3xl px-4 py-1.5 focus:outline-none placeholder-white focus:placeholder-transparent
                                 caret-white text-white 
                                ${errors.userName ? "border-red-500" : "border-gray-100"}
                                ${userInvalid ? "border-red-500" : "border-gray-100"} `}

                                    placeholder='Set your user name'
                                />

                                {errors.userName && (<p className='text-red-500 ml-2 mt-1 text-xs absolute'>{errors.userName.message}</p>)}
                            </div>

                            {/* Password */}
                            <div className='mb-5 relative'>
                                <label className="block mb-2 ml-3 font-semibold text-white text-sm">Password</label>
                                <input
                                    type={showPassword ? "text" : "password"}
                                    {...register('password', {

                                        required: "Please enter your password",
                                        minLength: {
                                            value: 8,
                                            message: "Password must be at least 8 characters"
                                        },
                                        maxLength: {
                                            value: 32,
                                            message: "Password must not exceed 32 characters"
                                        },
                                        pattern: {
                                            value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_\-+=<>?{}[\]~]).{8,32}$/,
                                            message: "Must include uppercase, lowercase, number & symbol."
                                        }
                                    })}
                                    className={`border rounded-3xl w-full px-4 py-1.5 focus:outline-none placeholder-white focus:placeholder-transparent
                                 caret-white text-white	text-sm
                                ${errors.password ? "border-red-500" : "border-gray-100"} 
                                ${userInvalid ? "border-red-500" : "border-gray-100"} `}

                                    placeholder='Set your password'
                                />

                                <button
                                    type='button'
                                    onClick={() => { setShowPassword(!showPassword) }}
                                    className='absolute right-5 bottom-2.5 text-xs text-gray-100 cursor-pointer'
                                >{showPassword ? "hide" : "show"}</button>

                                {errors.password && userInvalid === false && (<p className='text-red-500 ml-2 mt-1 text-xs absolute'>{errors.password.message}</p>)}
                                {userInvalid && (<p className='text-red-500 ml-2 mt-1 text-xs absolute'>{errorMessage}</p>)}
                            </div>


                            <button type='submit'
                                disabled={isSubmitting}
                                className='bg-white rounded-3xl w-full mt-4 py-1.5 font-bold text-sm text-gray-800 cursor-pointer'
                            >{isSubmitting ? "Loading..." : "Confirm"}</button>

                        </form>

                        <div className='mt-3 text-center'>

                            <Link to="/login" className="text-gray-200 mt-3 text-xs cursor-pointer hover:text-blue-400">
                                Not now
                            </Link>
                        </div>

                    </div>
                </main>


            </div>

            <footer>
                <Footer />
            </footer>

        </div>
    );
}

export default AccountSetup