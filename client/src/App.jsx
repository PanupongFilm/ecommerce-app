import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Login from './pages/Login.jsx';
import Register from './pages/Register.jsx';
import AccountSetup from './pages/AccountSetup.jsx';
import Verifying from './pages/Verifying.jsx';
import ResetPassword from './pages/ResetPassword.jsx';
import { GoogleOAuthProvider } from '@react-oauth/google'; 
import './app.css';


const clientId = "423442034307-khffpm38c25m6spi9fmmm6tboe352qml.apps.googleusercontent.com";

function App() {
  return (
    <GoogleOAuthProvider clientId={clientId}>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register/>} />
        <Route path='/account/setup' element={<AccountSetup/>}/>
        <Route path='/verifying' element={<Verifying/>}/>
        <Route path='reset-password' element={<ResetPassword/>}/>
      </Routes>
    </GoogleOAuthProvider>
  );
}

export default App;
