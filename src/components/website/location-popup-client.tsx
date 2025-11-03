'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'

interface LocationPopupClientProps {
  states: string[]
  cities: Record<string, string[]>
}

export function LocationPopupClient({ states, cities }: LocationPopupClientProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedState, setSelectedState] = useState('')
  const [selectedCity, setSelectedCity] = useState('')
  const [availableCities, setAvailableCities] = useState<string[]>([])
  const router = useRouter()

  useEffect(() => {
    // Check if the user has already selected a location
    const hasSelectedLocation = localStorage.getItem('locationSelected')
    
    if (!hasSelectedLocation) {
      // Show popup after the page has fully loaded
      const timer = setTimeout(() => {
        setIsOpen(true)
      }, 2000) // Increased delay to ensure page loads first
      
      return () => clearTimeout(timer)
    }
  }, [])

  useEffect(() => {
    if (selectedState && cities[selectedState]) {
      setAvailableCities(cities[selectedState])
    } else {
      setAvailableCities([])
    }
    setSelectedCity('')
  }, [selectedState, cities])

  const handleStateChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedState(e.target.value)
  }

  const handleCityChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCity(e.target.value)
  }

  const handleSubmit = () => {
    if (selectedCity) {
      // Store in localStorage to prevent showing the popup again
      localStorage.setItem('locationSelected', 'true')
      localStorage.setItem('selectedState', selectedState)
      localStorage.setItem('selectedCity', selectedCity)
      
      // Navigate to the selected city page
      const citySlug = selectedCity.toLowerCase().replace(/\s+/g, '-')
      router.push(`/${citySlug}`)
      
      // Close the popup
      setIsOpen(false)
    }
  }

  const handleClose = () => {
    // Mark as shown even if they don't select
    localStorage.setItem('locationSelected', 'true')
    setIsOpen(false)
  }

  if (!isOpen) return null

  return (
    <>
      {/* Full-screen overlay to prevent interaction with background elements */}
      <div 
        className="fixed inset-0 bg-black/70 backdrop-blur-sm z-[9999] animate-fadeIn" 
        onClick={(e) => e.stopPropagation()} 
        style={{ pointerEvents: "all" }}
      />
      
      {/* Popup container */}
      <div 
        className="fixed inset-0 z-[10000] flex items-center justify-center p-4 animate-fadeIn" 
        style={{ pointerEvents: "all" }}
      >
        <div className="bg-white rounded-lg shadow-2xl max-w-4xl w-full p-6 relative border-t-4 border-[#00a9e0] animate-slideIn">
          {/* Blue accent top border */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#00a9e0] to-[#0085b3]" />
          
          <button 
            onClick={handleClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-[#00a9e0] transition-colors duration-200"
            aria-label="Close"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          
          <div className="text-center mb-6 border-b border-gray-200 pb-4">
            <div className="flex items-center justify-center gap-3 mb-2">
              <div className="p-2 rounded-full bg-[#00a9e0]/10">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#00a9e0]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Please Select Your Location</h2>
            </div>
            <p className="text-gray-600">Choose your state and city to continue.</p>
          </div>
          
          <div className="flex flex-col md:flex-row md:items-end gap-4 md:gap-6">
            <div className="flex-1">
              <label htmlFor="state" className="block text-sm font-medium text-gray-700 mb-2">
                Select State
              </label>
              <div className="relative">
                <select
                  id="state"
                  value={selectedState}
                  onChange={handleStateChange}
                  className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#00a9e0] focus:border-[#00a9e0] appearance-none bg-white text-gray-700"
                >
                  <option value="">Select a state</option>
                  {states.map((state) => (
                    <option key={state} value={state}>
                      {state}
                    </option>
                  ))}
                </select>
                {/* Custom dropdown icon */}
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-[#00a9e0]">
                  <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
            </div>
            
            <div className="flex-1">
              <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-2">
                Select City
              </label>
              <div className="relative">
                <select
                  id="city"
                  value={selectedCity}
                  onChange={handleCityChange}
                  disabled={!selectedState || availableCities.length === 0}
                  className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#00a9e0] focus:border-[#00a9e0] appearance-none bg-white text-gray-700 disabled:bg-gray-50 disabled:text-gray-400 disabled:border-gray-200"
                >
                  <option value="">Select a city</option>
                  {availableCities.map((city) => (
                    <option key={city} value={city}>
                      {city}
                    </option>
                  ))}
                </select>
                {/* Custom dropdown icon */}
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-[#00a9e0]">
                  <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
              {selectedState && !cities[selectedState] && (
                <p className="text-sm text-red-500 mt-1">No cities available for this state</p>
              )}
            </div>
            
            <div className="md:min-w-[140px]">
              <button
                onClick={handleSubmit}
                disabled={!selectedCity}
                className="w-full bg-gradient-to-r from-[#00a9e0] to-[#0085b3] text-white py-3 px-4 rounded-md hover:from-[#0085b3] hover:to-[#006a8f] transition-all duration-300 font-medium shadow-md disabled:opacity-50 disabled:cursor-not-allowed disabled:bg-gray-300 disabled:from-gray-300 disabled:to-gray-300"
              >
                Continue
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}