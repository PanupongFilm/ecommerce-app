import axios from 'axios';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { LuShieldQuestion } from "react-icons/lu";



const ForgotPassword = () => {
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm();
  const [userInvalid, setUserInvalid] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      const response = await axios.post('http://localhost:4001/user/forgot-password', data, { withCredentials: true });
      if (response.status === 202) {
    
        const newResponse = await axios.post('http://localhost:4001/otp/sending', {}, { withCredentials: true });
        if(newResponse.status === 201) {
          navigate('/verifying');
        }
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
        <div className="p-9 pt-5 rounded-xl shadow-2xl bg-black/50 backdrop-blur-sm w-full max-w-105 max-h-79">

          <div className="flex justify-center mb-3 text-white text-6xl">
            <LuShieldQuestion />
          </div>


          <h1 className="text-xl font-bold mb-1 text-center text-white ">Forgot Password</h1>
          <h2 className="text-sm font-bold mb-4 text-center text-white ">Enter your email for OTP to reset password</h2>

          <form onSubmit={handleSubmit(onSubmit)}>

            {/* Email */}
            <div className="mb-7 relative text-sm">
              <input
                type='email'
                {...register('email', { required: "Please enter your email" })}

                className={`w-full border rounded-3xl px-4 py-1.5 focus:outline-none placeholder-white focus:placeholder-transparent
                                 caret-white text-white 
                                ${errors.email ? "border-red-500" : "border-gray-100"}
                                ${userInvalid ? "border-red-500" : "border-gray-100"} `}

                placeholder='Enter your email'
              />

              {errors.email && userInvalid === false && (<p className='text-red-500 ml-2 mt-1 text-xs absolute'>{errors.email.message}</p>)}
              {userInvalid && (<p className='text-red-500 ml-2 mt-1 text-xs absolute'>{errorMessage}</p>)}
            </div>

            <button type='submit'
              disabled={isSubmitting}
              className='bg-white rounded-3xl w-full mt-2 py-1.5 font-bold text-sm text-gray-800 cursor-pointer'
            >{isSubmitting ? "Loading..." : "Continue"}</button>

          </form>

          <div className='mb-1 mt-3 text-center'>

            <Link to="/login" className="text-gray-200 mt-3 text-xs cursor-pointer hover:text-blue-400">
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

export default ForgotPassword