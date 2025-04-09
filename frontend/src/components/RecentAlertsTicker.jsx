import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export default function RecentAlertsTicker() {
  const [alerts, setAlerts] = useState([])
  const [currentAlertIndex, setCurrentAlertIndex] = useState(0)
  const [inView, setInView] = useState(false)

  // Simulated API call to fetch alerts
  useEffect(() => {
    const fetchAlerts = async () => {
      // In a real application, replace this with an actual API call
      const mockAlerts = [
        { id: 1, message: "Severe thunderstorm warning for downtown area", type: "weather"},
        { id: 2, message: "Traffic accident on Main St. Expect delays", type: "traffic" },
        { id: 3, message: "Community meeting tonight at 7 PM", type: "community" },
        { id: 4, message: "Amber alert: Missing child in Springfield", type: "emergency" },
        { id: 5, message: "Flood warning for riverside areas", type: "weather" },
      ]
      setAlerts(mockAlerts)
    }

    fetchAlerts()
  }, [])

  useEffect(() => {
    if (alerts.length === 0) return

    const interval = setInterval(() => {
      setCurrentAlertIndex((prevIndex) => (prevIndex + 1) % alerts.length)
    }, 5000) // Change alert every 5 seconds

    return () => clearInterval(interval)
  }, [alerts])

  const { ref, inView: isNowInView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  })

  useEffect(() => {
    setInView(isNowInView)
  }, [isNowInView])

  return (
    <div className="bg-red-600 text-white py-1 px-4 w-full overflow-hidden" ref={ref}>
      <div className="max-w-7xl mx-auto relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentAlertIndex}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: inView ? 1 : 0 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center justify-center h-8"
          >
            {alerts[currentAlertIndex] && (
              <>
                <span className="font-bold mr-2">Alert:</span>
                <span>{alerts[currentAlertIndex].message}</span>
              </>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  )
}