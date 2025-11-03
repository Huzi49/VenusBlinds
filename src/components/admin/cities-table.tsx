'use client'

import { useState, useEffect } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { City } from '@/types'

export function CitiesTable() {
  const [cities, setCities] = useState<City[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // TODO: Fetch cities from API
    const fetchCities = async () => {
      try {
        const response = await fetch('/api/cities')
        const data = await response.json()
        setCities(data.cities || [])
      } catch (error) {
        console.error('Failed to fetch cities:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchCities()
  }, [])

  if (loading) {
    return <div className="text-center py-8">Loading cities...</div>
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Cities Management</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b">
                <th className="text-left p-4">City</th>
                <th className="text-left p-4">State</th>
                <th className="text-left p-4">Phone</th>
                <th className="text-left p-4">Service Areas</th>
                <th className="text-left p-4">Status</th>
                <th className="text-left p-4">Actions</th>
              </tr>
            </thead>
            <tbody>
              {cities.map((city) => (
                <tr key={city.id} className="border-b hover:bg-gray-50">
                  <td className="p-4">
                    <div>
                      <div className="font-semibold">{city.name}</div>
                      <div className="text-sm text-gray-500">/{city.slug}</div>
                    </div>
                  </td>
                  <td className="p-4">{city.state}</td>
                  <td className="p-4">{city.phone}</td>
                  <td className="p-4">
                    <div className="text-sm">
                      {city.serviceAreas.slice(0, 2).join(', ')}
                      {city.serviceAreas.length > 2 && (
                        <span className="text-gray-500"> +{city.serviceAreas.length - 2} more</span>
                      )}
                    </div>
                  </td>
                  <td className="p-4">
                    <span className={`px-2 py-1 rounded-full text-xs ${
                      city.isActive 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-red-100 text-red-800'
                    }`}>
                      {city.isActive ? 'Active' : 'Inactive'}
                    </span>
                  </td>
                  <td className="p-4">
                    <div className="flex space-x-2">
                      <Button variant="outline" size="sm">Edit</Button>
                      <Button variant="outline" size="sm">
                        {city.isActive ? 'Deactivate' : 'Activate'}
                      </Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  )
}
