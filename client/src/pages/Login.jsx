import axios from 'axios';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';


const Login = () => {
    const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm();
    const [showPassword, setShowPassword] = useState(false);
    const [userInvalid, setUserInvalid] = useState(false);
    const navigate = useNavigate();


    const onSubmit = async (data) => {
        try {
            const response = await axios.post('http://localhost:4001/user/login', data, { withCredentials: true });
            if (response.status === 200) {
                console.log(response.data.message);
                navigate('/');
            }
        } catch (error) {
            setUserInvalid(true);
        }
    };

    return (
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

            </header>

            <main className="flex-grow flex items-center justify-center">
                <div className="p-9 pt-5 rounded-xl shadow-2xl bg-black/50 backdrop-blur-sm w-full max-w-105 max-h-100">
                    <h1 className="text-2xl font-bold mb-4 text-center text-white text-">Login</h1>

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

                                placeholder='Enter your user name'
                            />

                            {errors.userName && (<p className='text-red-500 ml-2 mt-1 text-xs absolute'>{errors.userName.message}</p>)}
                        </div>

                        {/* Password */}
                        <div className='mb-5 relative'>
                            <label className="block mb-2 ml-3 font-semibold text-white text-sm">Password</label>
                            <input
                                type={showPassword ? "text" : "password"}
                                {...register('password', { required: "Please enter your password" })}
                                className={`border rounded-3xl w-full px-4 py-1.5 focus:outline-none placeholder-white focus:placeholder-transparent
                                 caret-white text-white	text-sm
                                ${errors.password ? "border-red-500" : "border-gray-100"} 
                                ${userInvalid ? "border-red-500" : "border-gray-100"} `}

                                placeholder='Enter your password'
                            />

                            <button
                                type='button'
                                onClick={() => { setShowPassword(!showPassword) }}
                                className='absolute right-4 bottom-3 text-xs text-gray-100 cursor-pointer'
                            >{showPassword ? "hide" : "show"}</button>

                            {errors.password && userInvalid === false && (<p className='text-red-500 ml-2 mt-1 text-xs absolute'>{errors.password.message}</p>)}
                            {userInvalid && (<p className='text-red-500 ml-2 mt-1 text-xs absolute'>Incorrect username or password</p>)}
                        </div>


                        <button type='submit'
                            disabled={isSubmitting}
                            className='bg-white rounded-3xl w-full mt-4 py-1.5 font-bold text-sm text-gray-800 cursor-pointer'
                        >{isSubmitting ? "Loading..." : "Login"}</button>

                        <div className='mt-5'>
                        <button className="flex items-center justify-center gap-3 bg-[#f2f2f2] text-[#1f1f1f] text-sm font-bold rounded-3xl w-full py-1.5 shadow hover:shadow-md cursor-pointer">
                            <FcGoogle className="w-5 h-5" />
                            <span>Sign in with Google</span>
                        </button>
                        </div>


                        <div className='mb-3 relative'>

                            <Link to="/forgot-password" className="text-gray-200 mt-3 absolute left-3 text-xs cursor-pointer hover:text-blue-400">
                                Forget password?
                            </Link>

                            <Link to="/auth/register" className="text-gray-200 mt-3 absolute right-3 text-xs cursor-pointer hover:text-blue-400">
                                Sign Up
                            </Link>
                        </div>



                    </form>
                </div>
            </main>

            <footer>

            </footer>
        </div>
    );
};

export default Login;
