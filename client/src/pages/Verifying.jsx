import axios from 'axios';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { MdOutlineMarkEmailRead } from "react-icons/md";



const AccountSetup = () => {
    const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm();
    const [counter, setCounter] = useState(0);
    const [userInvalid, setUserInvalid] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();
    const location = useLocation();
    const info = location.state || {};


    useEffect(() => {

        const checkAccessDataToken = async () => {
            try {
                await axios.get('http://localhost:4001/user/check/data-verifying', { withCredentials: true });
                
            } catch (error) {
                navigate('/register');
            }
        };

        checkAccessDataToken();

        if (counter === 0) return;

        const countdown = setInterval(() => {

            setCounter(previous => {
                if (previous <= 1) {
                    clearInterval(countdown);
                    return 0;
                }
                return previous - 1;
            });

        }, 1000);

        return () => clearInterval(countdown);
    }, [counter]);


    const handleResend = async () => {
        try {
            if (counter > 0) return;

            const response = await axios.post('http://localhost:4001/otp/sending', info, { withCredentials: true });
            if (response.status === 201) {
                setCounter(60);
            }


        } catch (error) {
            setErrorMessage(error.response.data.message);
            setUserInvalid(true);
        }
    }


    const onSubmit = async (data) => {
        try {
            const response = await axios.post('http://localhost:4001/otp/verifying', data, { withCredentials: true });

            if (response.status === 200) {
                navigate('/reset-password');
            }
            else if (response.status === 201) {
                navigate('/');
            }

        } catch (error) {
            setErrorMessage(error.response.data.message);
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
                <div className="p-9 pt-5 rounded-xl shadow-2xl bg-black/50 backdrop-blur-sm w-full max-w-105 max-h-77">

                    <div className="flex justify-center mb-3 text-white text-6xl">
                        <MdOutlineMarkEmailRead />
                    </div>


                    <h1 className="text-xl font-bold mb-1 text-center text-white ">Enter your code</h1>
                    <h2 className="text-sm font-bold mb-4 text-center text-white ">We sent a 6-digit OTP to {info.email}</h2>

                    <form onSubmit={handleSubmit(onSubmit)}>

                        {/* OTP */}
                        <div className='mb-5 relative'>

                            <input
                                type="text"
                                inputMode="numeric"
                                pattern="[0-9]*"
                                maxLength={6}
                                {...register('otp', {
                                    required: "Please enter the OTP",
                                    minLength: {
                                        value: 6,
                                        message: "OTP must be 6 digits"
                                    },
                                    maxLength: {
                                        value: 6,
                                        message: "OTP must be 6 digits"
                                    },
                                    pattern: {
                                        value: /^[0-9]{6}$/,
                                        message: "OTP must contain only numbers"
                                    }
                                })}
                                className={`border rounded-3xl w-full px-4 py-1.5 focus:outline-none placeholder-white focus:placeholder-transparent
                                 caret-white text-white text-sm
                                 ${errors.otp ? "border-red-500" : "border-gray-100"}`}
                                placeholder="Enter OTP"
                            />


                            <button
                                type='button'
                                disabled={counter > 0}
                                onClick={handleResend}
                                className='absolute right-5 bottom-2.5 text-xs text-gray-100 cursor-pointer'
                            >{counter > 0 ? `Resend in ${counter}s` : `Resend`}</button>

                            {errors.otp && userInvalid === false && (<p className='text-red-500 ml-2 mt-1 text-xs absolute'>{errors.otp.message}</p>)}
                            {userInvalid && (<p className='text-red-500 ml-2 mt-1 text-xs absolute'>{errorMessage}</p>)}
                        </div>


                        <button type='submit'
                            disabled={isSubmitting}
                            className='bg-white rounded-3xl w-full mt-2 py-1.5 font-bold text-sm text-gray-800 cursor-pointer'
                        >{isSubmitting ? "Loading..." : "Continue"}</button>

                    </form>

                    <div className='mb-1 mt-3 text-center'>

                        <Link to="/register" className="text-gray-200 mt-3 text-xs cursor-pointer hover:text-blue-400">
                            Not now
                        </Link>
                    </div>

                </div>
            </main>

            <footer>

            </footer>
        </div>
    );
}

export default AccountSetup