import React, { useState, useEffect } from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { motion, AnimatePresence } from 'framer-motion'
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'

// Fix for default marker icon
delete L.Icon.Default.prototype._getIconUrl
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
})

// Static markers for Indian cities
const staticMarkers = [
  { id: 1, title: 'Delhi', description: 'Capital city', lat: 28.6139, lng: 77.2090 },
  { id: 2, title: 'Mumbai', description: 'Financial capital', lat: 19.0760, lng: 72.8777 },
  { id: 3, title: 'Kolkata', description: 'Cultural hub', lat: 22.5726, lng: 88.3639 },
  { id: 4, title: 'Chennai', description: 'Gateway to South India', lat: 13.0827, lng: 80.2707 },
  { id: 5, title: 'Bengaluru', description: 'Silicon Valley of India', lat: 12.9716, lng: 77.5946 },
]

function HomePage() {
  const [alerts, setAlerts] = useState(staticMarkers)
  const [newAlert, setNewAlert] = useState({ title: '', description: '', lat: '', lng: '' })
  const [selectedAlert, setSelectedAlert] = useState(null)
  const [isFormVisible, setIsFormVisible] = useState(false)
  const [showInstructions, setShowInstructions] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    const newAlertWithId = { ...newAlert, id: alerts.length + 1 }
    setAlerts([...alerts, newAlertWithId])
    setNewAlert({ title: '', description: '', lat: '', lng: '' })
    setIsFormVisible(false)
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gray-100"
    >
      <h1 className="text-4xl font-extrabold text-center mb-8 text-blue-600 tracking-tight leading-tight">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">
          Real-Time Community Alert System
        </span>
      </h1>

      <main className="container mx-auto p-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="md:col-span-2"
          >
            <MapContainer
              center={[20.5937, 78.9629]}
              zoom={5}
              style={{ height: '70vh', width: '100%' }}
            >
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              />
              {alerts.map((alert) => (
                <Marker
                  key={alert.id}
                  position={[alert.lat, alert.lng]}
                  eventHandlers={{
                    click: () => setSelectedAlert(alert),
                  }}
                >
                  <Popup>
                    <h3 className="font-bold">{alert.title}</h3>
                    <p>{alert.description}</p>
                  </Popup>
                </Marker>
              ))}
            </MapContainer>
          </motion.div>

          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowInstructions(!showInstructions)}
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 mb-4"
            >
              {showInstructions ? 'Hide Instructions' : 'Show Instructions'}
            </motion.button>

            <AnimatePresence>
              {showInstructions && (
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 50 }}
                  transition={{ duration: 0.3 }}
                  className="mt-8 bg-white p-4 rounded-md shadow"
                >
                  <h2 className="text-xl font-bold mb-4">Instructions</h2>
                  <p>View existing alerts by clicking on the markers on the map.</p>
                  <p>To create a new alert, click the "Create New Alert" button and fill out the form.</p>
                  <p>Accurate location data is crucial for the effectiveness of the alert system.</p>
                </motion.div>
              )}
            </AnimatePresence>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsFormVisible(!isFormVisible)}
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 mb-4"
            >
              {isFormVisible ? 'Hide Form' : 'Create New Alert'}
            </motion.button>

            <AnimatePresence>
              {isFormVisible && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <h2 className="text-xl font-bold mb-4">Create New Alert</h2>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label htmlFor="title" className="block text-sm font-medium text-gray-700">
                        Title
                      </label>
                      <input
                        type="text"
                        id="title"
                        value={newAlert.title}
                        onChange={(e) => setNewAlert({ ...newAlert, title: e.target.value })}
                        required
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                      />
                    </div>
                    <div>
                      <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                        Description
                      </label>
                      <textarea
                        id="description"
                        value={newAlert.description}
                        onChange={(e) => setNewAlert({ ...newAlert, description: e.target.value })}
                        required
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                      />
                    </div>
                    <div>
                      <label htmlFor="lat" className="block text-sm font-medium text-gray-700">
                        Latitude
                      </label>
                      <input
                        type="number"
                        id="lat"
                        value={newAlert.lat}
                        onChange={(e) => setNewAlert({ ...newAlert, lat: e.target.value })}
                        required
                        step="any"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                      />
                    </div>
                    <div>
                      <label htmlFor="lng" className="block text-sm font-medium text-gray-700">
                        Longitude
                      </label>
                      <input
                        type="number"
                        id="lng"
                        value={newAlert.lng}
                        onChange={(e) => setNewAlert({ ...newAlert, lng: e.target.value })}
                        required
                        step="any"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                      />
                    </div>
                    <motion.button
                      type="submit"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-full bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
                    >
                      Create Alert
                    </motion.button>
                  </form>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>

        <AnimatePresence>
          {selectedAlert && (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              transition={{ duration: 0.3 }}
              className="mt-8"
            >
              <h2 className="text-xl font-bold mb-2">Selected Alert Details</h2>
              <div className="bg-white p-4 rounded-md shadow">
                <h3 className="font-bold text-lg">{selectedAlert.title}</h3>
                <p className="text-gray-600">{selectedAlert.description}</p>
                <p className="text-sm text-gray-500 mt-2">
                  Location: {selectedAlert.lat}, {selectedAlert.lng}
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </motion.div>
  )
}

export default HomePage