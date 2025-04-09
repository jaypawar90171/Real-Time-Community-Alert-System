import React from 'react'
import { motion } from 'framer-motion'
import { FaEnvelope, FaLock } from 'react-icons/fa'
import { useState } from 'react'
import { EyeIcon, EyeOffIcon } from '@heroicons/react/solid'

export default function LoginPage() {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
      })
      
      const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
      }
      
      const handleSubmit = (e) => {
        e.preventDefault()
        // Handle form submission (e.g., send data to backend)
        console.log('Form submitted:', formData)
      }
      
      const togglePasswordVisibility = () => {
        setShowPassword(!showPassword)
      }
      const [showPassword, setShowPassword] = useState(false)

  return (

    <div className="min-h-screen bg-gray-100 flex flex-col md:flex-row items-center justify-center px-6">
        {/** Login Form */}
        <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="md:w-1/3 bg-white p-6 shadow-md rounded-3xl">
    
        <h2 className="text-3xl font-bold  text-center text-black">Login</h2>
        <form onSubmit={handleSubmit} className="space-y-4">

            <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    <FaEnvelope className="mr-2" /> Email
                </label>
                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange}
                className="mt-1 block w-full rounded-md border border-gray-400 shadow-sm focus:ring focus:ring-blue-200 focus:ring-opacity-50 pl-2 pr-2 py-1" required />
            </div>

          <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              <FaLock className="mr-2" />Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full rounded-md border border-gray-400 shadow-sm focus:ring focus:ring-blue-200 focus:ring-opacity-50 pl-2 pr-2 py-1"
                />
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                >
                  {showPassword ? (
                    <EyeOffIcon className="h-5 w-5 text-gray-400" />
                  ) : (
                    <EyeIcon className="h-5 w-5 text-gray-400" />
                  )}
                </button>
              </div>
            </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
            Login
          </motion.button>
        </form>
      </motion.div>

    {/* Real-Time Alerts Overview Section */}
    <motion.div
    initial={{ x: 100, opacity: 0 }}
    animate={{ x: 0, opacity: 1 }}
    transition={{ duration: 0.5 }}
    className="md:w-2/3 bg-gray-100 p-8"
    >
    <h2 className="text-3xl font-bold  text-center">Community Alerts Overview</h2>

    {/* Current Alerts */}
    {/* <h3 className="text-2xl font-semibold mb-4">Latest Verified Alerts</h3>
    <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <ul className="space-y-2">
        <li>🚨 <span className="font-medium">Accident on 5th Ave</span> - Verified 1 hour ago</li>
        <li>🔥 <span className="font-medium">Fire near Central Park</span> - Verified 3 hours ago</li>
        <li>💧 <span className="font-medium">Water Shortage in Downtown</span> - Verified 5 hours ago</li>
        </ul>
        <p className="text-sm text-gray-600 mt-4">Stay updated with real-time alerts from verified sources. Log in to report and receive personalized alerts based on your location.</p>
    </div> */}

    {/* Why Log In */}
    <h3 className="text-2xl font-semibold mb-4">Why Log In?</h3>
    <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <p className="text-gray-600 mb-4">
        Logging in gives you access to full community alert features, including:
        </p>
        <ul className="list-disc list-inside space-y-2">
        <li>📲 Receive real-time alerts based on your location</li>
        <li>📝 Report incidents directly to the community</li>
        <li>🔔 Get notifications for emergencies and events</li>
        <li>💬 Participate in community discussions</li>
        </ul>
    </div>

    {/* Community Safety Tips */}
    <h3 className="text-2xl font-semibold mb-4">Community Safety Tips</h3>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
        <h4 className="text-lg font-semibold mb-2">🌪️ Prepare for Severe Weather</h4>
        <p className="text-gray-600">Ensure you have emergency supplies and a plan for potential evacuations in case of severe weather conditions.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
        <h4 className="text-lg font-semibold mb-2">🚦 Traffic Safety</h4>
        <p className="text-gray-600">Be aware of traffic conditions, especially during peak hours. Stay informed to avoid accidents and congestion.</p>
        </div>
    </div>
    </motion.div>
    
    </div>
  )
}
