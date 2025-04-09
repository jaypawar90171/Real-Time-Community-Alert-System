import React from 'react'
import { motion} from 'framer-motion'
import Home from '../Pages/Home';
import { useNavigate } from 'react-router-dom' // Import useNavigate

export default function AlertSystemMain() {
  const navigate = useNavigate();
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-extrabold text-center mb-8 text-blue-600 tracking-tight leading-tight">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">
          Real-Time Community Alert System
        </span>
      </h1>
      <div className="flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="w-full md:w-1/2">
          <motion.img
            src="./assets/Home.webp?height=400&width=400"
            width={400}
            height={400}
            alt="Community Alert System"
            className="rounded-lg shadow-lg"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          />
        </div>
        <div className="w-full md:w-1/2 space-y-4">
          <h2 className="text-2xl font-semibold">Stay Informed, Stay Safe</h2>
          <p className="text-gray-600">
            Our real-time community alert system keeps you updated on important events and emergencies in your area.
            From severe weather warnings to local safety concerns, we ensure you have the information you need when it matters most.
          </p>
          <ul className="list-disc list-inside text-gray-600">
            <li>Instant notifications for critical alerts</li>
            <li>Customizable alert preferences</li>
            <li>Community-driven reporting system</li>
            <li>Integration with local emergency services</li>
          </ul>
          <button 
          onClick={() => {
            //Navigae to the home page
            navigate('/home');
          }}
          className="w-full sm:w-auto px-6 py-3 bg-black text-white rounded-md hover:bg-blue-700 transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 shadow-lg flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
            </svg>
            Sign up for alerts
          </button>
        </div>
      </div>
    </div>
  )
}