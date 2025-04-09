import React from 'react'
import AlertSystemMain from '../components/AlertSystemMain'
import HowItWorks from '../components/HowItWorks'
import Footer from '../components/Footer'
import Accordian from '../components/accordion'

const Landing = () => {
  return (
    <div>
        <AlertSystemMain/>
        <HowItWorks/>
        <Accordian/>
        <Footer/>
    </div>
  )
}

export default Landing
