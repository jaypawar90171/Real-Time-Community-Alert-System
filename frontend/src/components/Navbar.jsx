import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Navbar() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)

  const menuItems = [
    { id: 1, title: 'Home', link: '/' },
    { id: 2, title: 'Map', link: '/home' },
    { id: 3, title: 'Sign up', link: '/signup' },
    { id: 4, title: 'Login', link: '/login' },
  ]

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen)
  }

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-1 sm:px-6 lg:px-1">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 flex items-center">
            <img className="h-8 w-auto" src="./assets/logo-no-background.svg" alt="Logo" />
            <span className="ml-2 text-xl font-bold text-gray-800">Community Alert System</span>
          </div>
          
          {/* Desktop menu */}
          <div className="hidden md:flex items-center">
            <ul className="flex space-x-4">
              {menuItems.map((item) => (
                <li key={item.id}>
                  <motion.div
                    className="relative"
                    whileHover="hover"
                    initial="rest"
                    animate="rest"
                  >
                    <a href={item.link} className="text-gray-600 hover:text-gray-900">
                      {item.title}
                    </a>
                    <motion.div
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-500"
                      variants={{
                        rest: { width: 0 },
                        hover: { width: '100%' },
                      }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.div>
                </li>
              ))}
            </ul>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleDrawer}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Drawer */}
      <AnimatePresence>
        {isDrawerOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed inset-y-0 right-0 max-w-xs w-full bg-white shadow-xl z-50 overflow-y-auto md:hidden"
          >
            <div className="p-6">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl font-bold text-gray-800">Menu</h2>
                <button
                  onClick={toggleDrawer}
                  className="text-gray-600 hover:text-gray-900 focus:outline-none"
                >
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <ul className="space-y-4">
                {menuItems.map((item) => (
                  <li key={item.id}>
                    <a
                      href={item.link}
                      className="block text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md px-3 py-2 transition duration-150 ease-in-out"
                      onClick={toggleDrawer}
                    >
                      {item.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Overlay */}
      {isDrawerOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={toggleDrawer}
        ></div>
      )}
    </nav>
  )
}

