import React from 'react'
import Navbar from './components/GeneralOnes/Navbar'

import { BrowserRouter as Router, Routes, Route,   useLocation } from "react-router-dom";
import Home from './pages/Home';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={< Navbar/>} />
        <Route path='/home' element={< Home/>} />
        <Route path='/login' element={< LoginPage/>} />
        <Route path='/signup' element={< SignUpPage/>} />

      </Routes>
    </Router>
  )
}

export default App
