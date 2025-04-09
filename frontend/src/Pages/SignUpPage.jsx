import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { FaEnvelope, FaPhone, FaHome, FaLock } from 'react-icons/fa'

export default function SignUpPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
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

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col md:flex-row items-center justify-center px-6">
      {/* Sign Up Form */}
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="md:w-1/3 bg-white p-6 shadow-md rounded-3xl"
      >
        <h2 className="text-3xl font-bold mb-6 text-center text-black">Sign Up</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              <FaEnvelope className="mr-2" /> Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 px-1"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              <FaEnvelope className="mr-2" /> Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 px-1"
            />
          </div>
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
              <FaPhone className="mr-2" /> Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 px-1"
            />
          </div>
          <div>
            <label htmlFor="address" className="block text-sm font-medium text-gray-700">
              <FaHome className="mr-2" /> Address
            </label>
            <textarea
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
              rows="3"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 px-1"
            ></textarea>
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              <FaLock className="mr-2" /> Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 px-1"
            />
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          >
            Sign Up
          </motion.button>
        </form>
      </motion.div>

      {/* Local Awareness Section */}
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="md:w-2/3 bg-gray-100 p-8"
      >
        <h2 className="text-3xl font-bold mb-6 text-center">Local Awareness</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Community Events</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>Annual Street Festival - June 15th</li>
              <li>Neighborhood Clean-up Drive - Every 1st Saturday</li>
              <li>Local Farmers Market - Sundays, 8 AM - 1 PM</li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Emergency Contacts</h3>
            <ul className="space-y-2">
              <li>Police: 100</li>
              <li>Fire Department: 101</li>
              <li>Ambulance: 102</li>
              <li>Disaster Management: 108</li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Local News</h3>
            <ul className="space-y-2">
              <li>New recycling program starting next month</li>
              <li>City council meeting scheduled for next week</li>
              <li>Local school wins national science competition</li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Get Involved</h3>
            <p className="mb-4">Join our community initiatives and make a difference:</p>
            <ul className="list-disc list-inside space-y-2">
              <li>Volunteer at the local food bank</li>
              <li>Join the neighborhood watch program</li>
              <li>Participate in community gardening projects</li>
            </ul>
          </div>
        </div>
      </motion.div>
    </div>
  )
}