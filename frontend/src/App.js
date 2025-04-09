import React from 'react'
import Navbar from './components/Navbar'
import RecentAlertsTicker from './components/RecentAlertsTicker'
import AlertSystemMain from './components/AlertSystemMain'
import Accordion from './components/accordion'
import HowItWorks from './components/HowItWorks'
import Footer from './components/Footer'
import Home from './Pages/Home'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Landing from './Pages/Landing'
import LoginPage from './Pages/LoginPage'
import SignUpPage from './Pages/SignUpPage'

const App = () => {
  return (
    <Router>
      <RecentAlertsTicker/>
      <Navbar/>

      <Routes>
        <Route path='/' element={<Landing/>} />
        <Route path="/home" element={<Home/>} />
        <Route path='/login' element={<LoginPage/>} />
        <Route path='/signup' element={<SignUpPage/>} />
      </Routes>
    </Router>
  )
}

export default App
