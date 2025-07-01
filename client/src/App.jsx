import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Login from './pages/Login.jsx';
import { GoogleOAuthProvider } from '@react-oauth/google'; 
import './app.css';


const clientId = "423442034307-khffpm38c25m6spi9fmmm6tboe352qml.apps.googleusercontent.com";

function App() {
  return (
    <GoogleOAuthProvider clientId={clientId}>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/auth/login' element={<Login />} />
      </Routes>
    </GoogleOAuthProvider>
  );
}

export default App;
