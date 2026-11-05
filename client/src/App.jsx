import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Login from './pages/Login.jsx';
import Register from './pages/Register.jsx';
import AccountSetup from './pages/AccountSetup.jsx';
import Verifying from './pages/Verifying.jsx';
import ForgotPassword from './pages/ForgotPassword.jsx';
import ResetPassword from './pages/ResetPassword.jsx';
import Admin from './pages/Admin.jsx';
import { GoogleOAuthProvider } from '@react-oauth/google'; 
import './App.css';




const clientId = import.meta.env.VITE_GOOGLE_CLIENT_ID;

function App() {
  return (
    <GoogleOAuthProvider clientId={clientId}>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register/>} />
        <Route path='/account/setup' element={<AccountSetup/>}/>
        <Route path='/verifying' element={<Verifying/>}/>
        <Route path='forgot-password' element={<ForgotPassword/>}/>
        <Route path='/reset-password' element={<ResetPassword/>}/>
        <Route path='/admin/218367b310cb4b8f7deb76ab7e8abb933638efef13609a6994787b7d385b62827a435822924132bdb5f15097916c23d1d7395c7acda2dae28d0e33712773e4e9-dashboard' element={<Admin/>}/>
      </Routes>
    </GoogleOAuthProvider>
  );
}

export default App;
