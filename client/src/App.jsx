import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Login from './pages/Login.jsx';
import './app.css';




function App() {


  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/auth/login' element={<Login/>}/>

    </Routes>
  )
}

export default App
