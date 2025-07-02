import axios from 'axios';
import { FcGoogle } from 'react-icons/fc';
import { useGoogleLogin } from '@react-oauth/google';
import { useNavigate } from 'react-router-dom';


const GoogleLoginButton = () => {

  const navigate = useNavigate();

  const login = useGoogleLogin({
    onSuccess: async (credentialResponse) => {

      try {

        const token = credentialResponse.access_token;
        const res = await axios.post('http://localhost:4001/user/google-auth', { token });
        navigate('/');
        
      } catch (error) {
        console.error(error);
        alert('Google login failed');
      }
    },
    onError: () => {
      alert('Login Failed');
    },
  });


  const handleGoogleLogin = () => {
    login();
  };

  return (
    <div className='mt-5'>
      <button
        type="button"
        className="flex items-center justify-center gap-3 bg-[#f2f2f2] 
                text-[#1f1f1f] text-sm font-bold rounded-3xl w-full py-1.5 
                shadow hover:shadow-md cursor-pointer"
        onClick={handleGoogleLogin}
      >
        <FcGoogle className="w-5 h-5" />
        <span>Sign in with Google</span>
      </button>
    </div>
  )
}

export default GoogleLoginButton;
