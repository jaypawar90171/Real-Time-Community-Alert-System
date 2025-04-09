import React, { useState } from 'react'
import { Bell, Smartphone, Shield, Users } from "lucide-react"
import { motion } from "framer-motion"

const steps = [
  {
    icon: <Bell className="w-12 h-12 text-blue-500" />,
    title: "Sign Up",
    description: "Register for our alert system by providing your contact information and location."
  },
  {
    icon: <Smartphone className="w-12 h-12 text-blue-500" />,
    title: "Choose Preferences",
    description: "Select the types of alerts you want to receive and your preferred notification methods."
  },
  {
    icon: <Shield className="w-12 h-12 text-blue-500" />,
    title: "Receive Alerts",
    description: "Get instant notifications about emergencies, weather alerts, and community events."
  },
  {
    icon: <Users className="w-12 h-12 text-blue-500" />,
    title: "Stay Informed",
    description: "Stay connected with your community and take action when necessary to ensure safety."
  }
]

const HowItWorks = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null)

  return (
    <section className="bg-gray-50 py-12 px-4">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <motion.div 
                className="bg-white rounded-full p-4 shadow-lg mb-4"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                animate={{
                  scale: hoveredIndex === index ? 1.1 : 1,
                  rotate: hoveredIndex === index ? 360 : 0,
                }}
                transition={{ duration: 0.3 }}
              >
                {step.icon}
              </motion.div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HowItWorks