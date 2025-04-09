import React from 'react';
import { Facebook, Twitter, Instagram, Mail, Phone } from 'lucide-react'
import { motion } from 'framer-motion'

const footerSections = [
  {
    title: "About Us",
    content: (
      <p className="text-sm text-gray-300">
        We are dedicated to keeping communities safe and informed through our real-time alert system.
      </p>
    )
  },
  {
    title: "Quick Links",
    content: (
      <ul className="space-y-2">
        <li><a href="/" className="text-sm text-gray-300 hover:text-white transition-colors">Home</a></li>
        <li><a href="/about" className="text-sm text-gray-300 hover:text-white transition-colors">About</a></li>
        <li><a href="/alerts" className="text-sm text-gray-300 hover:text-white transition-colors">Alerts</a></li>
        <li><a href="/contact" className="text-sm text-gray-300 hover:text-white transition-colors">Contact</a></li>
      </ul>
    )
  },
  {
    title: "Contact Us",
    content: (
      <ul className="space-y-2">
        <li className="flex items-center">
          <Mail className="w-4 h-4 mr-2" />
          <a href="mailto:info@alertsystem.com" className="text-sm text-gray-300 hover:text-white transition-colors">info@alertsystem.com</a>
        </li>
        <li className="flex items-center">
          <Phone className="w-4 h-4 mr-2" />
          <a href="tel:+1234567890" className="text-sm text-gray-300 hover:text-white transition-colors">+1 (234) 567-890</a>
        </li>
      </ul>
    )
  },
  {
    title: "Follow Us",
    content: (
      <div className="flex space-x-4">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
          <Facebook className="w-6 h-6" />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
          <Twitter className="w-6 h-6" />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
          <Instagram className="w-6 h-6" />
        </a>
      </div>
    )
  }
]

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {footerSections.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <motion.h3
                className="text-lg font-semibold mb-4"
                whileHover={{ scale: 1.1, originX: 0 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {section.title}
              </motion.h3>
              {section.content}
            </motion.div>
          ))}
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p className="text-sm text-gray-300">
            © {new Date().getFullYear()} Community Alert System. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}