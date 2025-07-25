import React from 'react'
import Navbar from './components/GeneralOnes/Navbar'

import { BrowserRouter as Router, Routes, Route,   useLocation } from "react-router-dom";
import Home from './pages/Home';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={< Navbar/>} />
        <Route path='/home' element={< Home/>} />

      </Routes>
    </Router>
  )
}

export default App
